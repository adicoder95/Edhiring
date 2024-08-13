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
        console.log("g22")
        
        res.status(200).json({ success: true, Candidate: user.additionalDetails });

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
      let profilePic = req.files.profilePic;
      let { gender, contactNumber, currentCity, dateOfBirth, about } = req.body;

      const image = await uploadImageToCloudinary(
        profilePic,
        process.env.FOLDER_NAME,
        1000,
        1000
      )
      console.log(image.secure_url);

      // Format the dateOfBirth to remove the time part
      if (dateOfBirth) {
          dateOfBirth = new Date(dateOfBirth);
          dateOfBirth.setUTCHours(0, 0, 0, 0); // Set time to 00:00:00
      }

      // Create an update object
      const updateData = {
          gender,
          contactNumber,
          currentCity,
          dateOfBirth,
          about
      };
      const updatedProfile = await Candidate.findByIdAndUpdate(
        user.additionalDetails._id,
        { profilePic : image.secure_url },
        { new: true }
      );
      // Remove undefined fields from the update object
      Object.keys(updateData).forEach(key => {
          if (updateData[key] === undefined) {
              delete updateData[key];
          }
      });

      const candidate = await Candidate.findByIdAndUpdate(
          profileId,  // Assuming _id is used to identify Profile
          updateData,
          updatedProfile,
          { new: true, runValidators: true }
      );
      console.log('this is profileId'+profileId);

      await recordActivity(req.user.id, 'Profile', `Updated Profile Information`); //recent activity

      res.status(200).json({ success: true, candidate});
  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
  }
};
