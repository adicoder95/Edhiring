const Candidate = require("../models/Profile");
const User = require("../models/User");
const recordActivity = require('../services/activityService');
const { uploadImageToCloudinary } = require("../utils/cloudinary");
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
    let { personalDetails, workExperience, keySkills, education, certification, language, hobbies } = req.body;

    // Update profile picture if provided
    if (req.files && req.files.profilePic) {
      const profilePic = req.files.profilePic;
      const image = await uploadImageToCloudinary(
        profilePic,
        process.env.FOLDER_NAME,
        1000,
        1000
      );
      personalDetails.profilePic = image.secure_url;
    }

    // Update other fields
    const updateData = {
      personalDetails,
      workExperience,
      keySkills,
      education,
      certification,
      language,
      hobbies
    };

    const updatedProfile = await Candidate.findByIdAndUpdate(
      profileId,
      updateData,
      { new: true, runValidators: true }
    );

    await recordActivity(req.user.id, 'Profile', 'Updated Profile Information');

    res.status(200).json({ success: true, candidate: updatedProfile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
