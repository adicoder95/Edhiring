const Candidate = require("../models/Profile");
const User = require("../models/User");
const recordActivity = require('../services/activityService');
const { uploadImageToCloudinary , uploadFileToCloudinary, uploadTexFileToCloudinary} = require("../utils/cloudinary");
const cloudinary = require("../config/cloudinaryConfig");
const fs = require('fs');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('additionalDetails');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    
    res.status(200).json({ success: true, candidate: user.additionalDetails });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('additionalDetails');

    // Ensure user and additionalDetails exist
    if (!user || !user.additionalDetails) {
      return res.status(404).json({ success: false, message: 'User profile not found' });
    }

    const profileId = user.additionalDetails._id;
    const updateData = {};

    // Handle personalDetails update
    if (req.body.personalDetails) {
      // Merge existing personalDetails with the new data
      updateData.personalDetails = {
        ...user.additionalDetails.personalDetails.toObject(), // Convert to plain object if using Mongoose
        ...req.body.personalDetails // Update with new details
      };

      // Update profile picture if provided
      if (req.files && req.files.profilePic) {
        const profilePic = req.files.profilePic;
        const image = await uploadImageToCloudinary(
          profilePic,
          process.env.FOLDER_NAME,
          1000,
          1000
        );
        updateData.personalDetails.profilePic = image.secure_url;
      }

      // Update resume if provided
      if (req.files && req.files.resume) {
        const resume = req.files.resume;
        const uploadedFile = await uploadFileToCloudinary(
          resume,
          process.env.FOLDER_NAME
        );
        updateData.personalDetails.resume = uploadedFile.secure_url;
      }
    }

    // Handle other updates (workExperience, keySkills, etc.) similarly
    if (req.body.workExperience) {
      updateData.workExperience = req.body.workExperience; // No need to parse
    }

    if (req.body.keySkills) {
      updateData.keySkills = req.body.keySkills; // No need to parse
    }

    if (req.body.education) {
      updateData.education = req.body.education; // No need to parse
    }

    if (req.body.certification) {
      updateData.certification = req.body.certification; // No need to parse
    }

    if (req.body.language) {
      updateData.language = req.body.language; // No need to parse
    }

    if (req.body.hobbies) {
      updateData.hobbies = req.body.hobbies; // No need to parse
    }

    // Update the candidate's profile
    const updatedProfile = await Candidate.findByIdAndUpdate(
      profileId,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ success: false, message: 'Profile update failed' });
    }

    // Record activity
    await recordActivity(req.user.id, 'Profile', 'Updated Profile Information');

    res.status(200).json({ success: true, candidate: updatedProfile });
  } catch (error) {
    console.error(error);
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
    
    // Initialize the public_id variable
    let publicId;

    // If the user has an existing resume .tex file, get its public_id
    if (user.resumeTexUrl) {
      const urlParts = profile.personalDetails.resume.split('/');
      publicId = urlParts[urlParts.length - 1].split('.')[0]; // Extract the public_id from the URL
    } else {
      // If no existing file, create a new public_id
      publicId = `${baseFolder}/${subfolderName}/${texFile.name.split('.')[0]}`;
    }

    // Upload the .tex file to Cloudinary, overwriting the existing one if it exists
    const uploadedFile = await cloudinary.uploader.upload(texFile.tempFilePath, {
      folder: `${baseFolder}/${subfolderName}`, // Store inside "Dynamic folder"
      public_id: publicId,
      resource_type: 'raw',
      use_filename: true,
      unique_filename: false,
      overwrite: true, // Ensure the existing file is overwritten
    });

    // Update the resume URL in the candidate's personalDetails
    profile.personalDetails.resume = `https://latexonline.cc/compile?url=${uploadedFile.secure_url}`;

    // Save the updated profile
    await profile.save();

    // Respond with the Cloudinary link
    res.status(200).json({ 
      success: true, 
      message: 'Resume uploaded/updated successfully', 
      urlofTex: uploadedFile.secure_url,
      urlofPdf: `https://latexonline.cc/compile?url=${uploadedFile.secure_url}`
    });
  } catch (error) {
    console.error('Error uploading .tex file:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
