const Candidate = require("../models/Profile");
const User = require("../models/User");
const recordActivity = require('../services/activityService');
const { uploadImageToCloudinary , uploadFileToCloudinary, uploadTexFileToCloudinary} = require("../utils/cloudinary");
const cloudinary = require("../config/cloudinaryConfig");
const fs = require('fs');

exports.getProfile = async (req, res) => {
  try {
    // Find the user and populate the additionalDetails field
    const user = await User.findById(req.user.id).populate('additionalDetails');
    if (!user || !user.additionalDetails) {
      return res.status(404).json({ success: false, message: 'User profile not found' });
    }

    // Ensure personalDetails is defined in additionalDetails
    if (!user.additionalDetails.PersonalDetails) {
      user.additionalDetails.PersonalDetails = {};
    }


    // Respond with the candidate's profile
    res.status(200).json({ success: true, candidate: user.additionalDetails });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};



exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const updatePayload = req.body;

    // Fetch the user along with their additionalDetails
    const user = await User.findById(userId).populate('additionalDetails');

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    if (!user.additionalDetails) {
      return res.status(404).json({ success: false, message: 'User profile not found' });
    }

    const candidateId = user.additionalDetails._id;

    // Prepare update data
    const updateData = {};

    /*** Update PersonalDetails ***/
    if (updatePayload.PersonalDetails) {
      updateData['PersonalDetails'] = {
        Full_Name: `${user.firstName} ${user.lastName}`,
        Email: user.email,
        Contact_No: user.contact,
        ...user.additionalDetails.PersonalDetails.toObject(),
        ...updatePayload.PersonalDetails,
      };
    }

    /*** Update WorkExperience ***/
    if (updatePayload.WorkExperience) {
      if (Array.isArray(updatePayload.WorkExperience)) {
        updateData['WorkExperience'] = updatePayload.WorkExperience;
      } else {
        return res.status(400).json({ success: false, message: 'WorkExperience should be an array' });
      }
    }

    /*** Update KeySkills ***/
    if (updatePayload.KeySkills) {
      if (Array.isArray(updatePayload.KeySkills.tags)) {
        updateData['KeySkills'] = {
          tags: updatePayload.KeySkills.tags,
        };
      } else {
        return res.status(400).json({ success: false, message: 'KeySkills.tags should be an array' });
      }
    }

    /*** Update Education ***/
    if (updatePayload.Education) {
      if (Array.isArray(updatePayload.Education)) {
        updateData['Education'] = updatePayload.Education;
      } else {
        return res.status(400).json({ success: false, message: 'Education should be an array' });
      }
    }

    /*** Update Certification ***/
    if (updatePayload.Certification) {
      if (Array.isArray(updatePayload.Certification)) {
        updateData['Certification'] = updatePayload.Certification;
      } else {
        return res.status(400).json({ success: false, message: 'Certification should be an array' });
      }
    }

    /*** Update Language ***/
    if (updatePayload.Language) {
      if (Array.isArray(updatePayload.Language)) {
        updateData['Language'] = updatePayload.Language;
      } else {
        return res.status(400).json({ success: false, message: 'Language should be an array' });
      }
    }

    /*** Update Hobbies ***/
    if (updatePayload.Hobbies) {
      if (Array.isArray(updatePayload.Hobbies.Hobbies)) {
        updateData['Hobbies'] = {
          Hobbies: updatePayload.Hobbies.Hobbies,
        };
      } else {
        return res.status(400).json({ success: false, message: 'Hobbies.Hobbies should be an array' });
      }
    }

    // Perform the update
    const updatedProfile = await Candidate.findByIdAndUpdate(
      candidateId,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedProfile) {
      return res.status(500).json({ success: false, message: 'Failed to update profile' });
    }

    // Optionally, update user's firstName and lastName if included in PersonalDetails
    if (updatePayload.PersonalDetails && updatePayload.PersonalDetails.Full_Name) {
      const [firstName, ...lastNameArr] = updatePayload.PersonalDetails.Full_Name.split(' ');
      const lastName = lastNameArr.join(' ');
      user.firstName = firstName;
      user.lastName = lastName;
      await user.save();
    }

    // Record activity (assuming you have this function implemented)
    await recordActivity(userId, 'Profile Update', 'User updated their profile information');

    // Respond with updated profile
    return res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      data: updatedProfile,
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while updating the profile',
      error: error.message,
    });
  }
};




exports.uploadResumeTex = async (req, res) => {
  try {
    const userId = req.user.id;
    const subfolderName = `user_${userId}`;
    const baseFolder = "Dynamic folders"; // Name of the existing folder

    if (!req.files || !req.files.texFile) {
      return res.status(400).json({ success: false, message: 'No .tex file provided' });
    }

    const texFile = req.files.texFile;

    // Fetch the user to get the existing file's public_id
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const profile = await Candidate.findById(user.additionalDetails);

    if (!profile) {
      return res.status(404).json({ success: false, message: 'Profile not found' });
    }

    // Initialize the public_id variable
    let publicId;

    // If the user has an existing resume .tex file, get its public_id
    if (profile.PersonalDetails.ResumeTex) {
      const urlParts = profile.PersonalDetails.ResumeTex.split('/');
      publicId = urlParts[urlParts.length - 1].split('.')[0]; // Extract the public_id from the URL
    } else {
      // If no existing file, create a new public_id
      publicId = `${baseFolder}/${subfolderName}/${texFile.name.split('.')[0]}`;
    }

    // Upload the .tex file to Cloudinary, overwriting the existing one if it exists
    const uploadedTexFile = await cloudinary.uploader.upload(texFile.tempFilePath, {
      folder: `${baseFolder}/${subfolderName}`, // Store inside "Dynamic folder"
      public_id: publicId,
      resource_type: 'raw',
      use_filename: true,
      unique_filename: false,
      overwrite: true, // Ensure the existing file is overwritten
    });

    // Generate the PDF URL using LaTeXOnline.cc
    const pdfUrl = `https://latexonline.cc/compile?url=${uploadedTexFile.secure_url}`;

    // Update the resume URL in the candidate's profile
    profile.PersonalDetails.ResumeTex = uploadedTexFile.secure_url;
    profile.PersonalDetails.ResumePdf = pdfUrl;
    
    // Save the updated profile
    await profile.save();

    // Respond with the URLs of the .tex file and the generated PDF
    res.status(200).json({ 
      success: true, 
      message: 'Resume uploaded/updated successfully', 
      urlofTex: uploadedTexFile.secure_url,
      urlofPdf: pdfUrl
    });
  } catch (error) {
    console.error('Error uploading .tex file:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};


exports.getUserTex = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const profile = await Candidate.findById(user.additionalDetails);

    if (!profile) {
      return res.status(404).json({ success: false, message: 'Profile not found' });
    }

    
    res.status(200).json({ success: true, Resume: profile.personalDetails.resumeTex});

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};