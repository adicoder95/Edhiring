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

    // Set full name and email in personalDetails
    user.additionalDetails.PersonalDetails.Full_Name = `${user.firstName} ${user.lastName}`;
    user.additionalDetails.PersonalDetails.Email = user.email;
    user.additionalDetails.PersonalDetails.Contact_No = user.contact;

    // Respond with the candidate's profile
    res.status(200).json({ success: true, candidate: user.additionalDetails });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};




exports.updateProfile = async (req, res) => {
  try {
    // Fetch the user and populate the additionalDetails field
    const user = await User.findById(req.user.id).populate('additionalDetails');

    // Ensure user and additionalDetails exist
    if (!user || !user.additionalDetails) {
      return res.status(404).json({ success: false, message: 'User profile not found' });
    }

    const profileId = user.additionalDetails._id;
    const updateData = {};

    // Update personalDetails field
    if (req.body.PersonalDetails) {
      // Check if PersonalDetails is a string and parse it
      const PersonalDetails = typeof req.body.PersonalDetails === 'string' 
        ? JSON.parse(req.body.PersonalDetails) 
        : req.body.PersonalDetails;

      updateData.PersonalDetails = {
        ...user.additionalDetails.PersonalDetails.toObject(),
        ...PersonalDetails
      };

      // Update profile picture if provided
      if (req.files && req.files.Profile_Pic) {
        const Profile_Pic = req.files.Profile_Pic;
        const image = await uploadImageToCloudinary(
          Profile_Pic,
          process.env.FOLDER_NAME,
          1000,
          1000
        );
        updateData.PersonalDetails.Profile_Pic = image.secure_url;
      }

      // Update resume if provided
      if (req.files && req.files.ResumePdf) {
        const ResumePdf = req.files.ResumePdf;
        const uploadedFile = await uploadFileToCloudinary(
          ResumePdf,
          process.env.FOLDER_NAME
        );
        updateData.PersonalDetails.ResumePdf = uploadedFile.secure_url;
      }
    }

    // Handle other updates (workExperience, keySkills, etc.)
    if (req.body.WorkExperience) {
      updateData.WorkExperience = JSON.parse(req.body.WorkExperience);
    }

    if (req.body.KeySkills) {
      updateData.KeySkills = JSON.parse(req.body.KeySkills);
    }

    if (req.body.Education) {
      updateData.Education = JSON.parse(req.body.Education);
    }

    if (req.body.Certification) {
      updateData.Certification = JSON.parse(req.body.Certification);
    }

    if (req.body.Language) {
      updateData.Language = JSON.parse(req.body.Language);
    }

    if (req.body.Hobbies) {
      updateData.Hobbies = JSON.parse(req.body.Hobbies);
    }

    // Log the updateData for debugging
    console.log('Update Data:', updateData);

    // Update the candidate's profile with the new data
    const updatedProfile = await Candidate.findByIdAndUpdate(
      profileId,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ success: false, message: 'Profile update failed' });
    }

    // Record activity for audit trail or logs
    await recordActivity(req.user.id, 'Profile', 'Updated Profile Information');

    // Respond with the updated profile
    res.status(200).json({ success: true, candidate: updatedProfile });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
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
