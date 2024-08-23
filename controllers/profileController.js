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
      updateData.personalDetails = JSON.parse(req.body.personalDetails);

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

    // Handle workExperience update
    if (req.body.workExperience) {
      updateData.workExperience = JSON.parse(req.body.workExperience);
    }

    // Handle keySkills update
    if (req.body.keySkills) {
      updateData.keySkills = JSON.parse(req.body.keySkills);
    }

    // Handle education update
    if (req.body.education) {
      updateData.education = JSON.parse(req.body.education);
    }

    // Handle certification update
    if (req.body.certification) {
      updateData.certification = JSON.parse(req.body.certification);
    }

    // Handle language update
    if (req.body.language) {
      updateData.language = JSON.parse(req.body.language);
    }

    // Handle hobbies update
    if (req.body.hobbies) {
      updateData.hobbies = JSON.parse(req.body.hobbies);
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
    // console.log("user id "+userId)
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

    // Initialize the public_id variable
    let publicId;

    const profile = await Candidate.findById(user.additionalDetails);
    
    // If the user has an existing resume .tex file, get its public_id
    console.log("user.resumeTexUrl: "+user.resumeTexUrl)
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

    // Save the updated URL in the user's profile

    profile.personalDetails.resume = `https://latexonline.cc/compile?url=`;

    console.log("user ka profile: "+user.additionalDetails.personalDetails);
    // console.log("user.resume : "+additionalDetails);
    console.log("user.add : "+profile.personalDetails);
    await user.save();

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
