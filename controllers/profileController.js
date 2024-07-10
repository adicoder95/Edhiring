const Profile = require("../models/Profile");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/cloudinary");
const cloudinary = require("../config/cloudinaryConfig");
const fs = require('fs');



exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('additionalDetails');
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, profile: user.additionalDetails });
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
            return res.status(404).json({ success: false, message: 'User or profile not found' });
        }

        const profileId = user.additionalDetails._id;
        let { profilePic, gender, contactNumber, currentCity, dateOfBirth, about } = req.body;

        // Format the dateOfBirth to remove the time part
        if (dateOfBirth) {
            dateOfBirth = new Date(dateOfBirth);
            dateOfBirth.setUTCHours(0, 0, 0, 0); // Set time to 00:00:00
        }

        // Create an update object
        const updateData = {
            profilePic,
            gender,
            contactNumber,
            currentCity,
            dateOfBirth,
            about
        };

        // Remove undefined fields from the update object
        Object.keys(updateData).forEach(key => {
            if (updateData[key] === undefined) {
                delete updateData[key];
            }
        });

        const profile = await Profile.findByIdAndUpdate(
            profileId,  // Assuming _id is used to identify Profile
            updateData,
            { new: true, runValidators: true }
        );

        res.status(200).json({ success: true, profile});
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};



exports.updateDisplayPicture = async (req, res) => {
    try {
      // Get the file from the request
      const { file } = req;
      if (!file) {
        return res.status(400).json({
          success: false,
          message: "No file uploaded",
        });
      }
  
      // Get the current user
      const userId = req.user.id;
  
      // Upload the image to Cloudinary
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "profile_pictures",
      });
  
      // Remove the file from local storage after upload
      fs.unlinkSync(file.path);
  
      // Update the user's profile picture URL in the database
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { profilePic: result.secure_url },
        { new: true }
      );
  
      res.status(200).json({
        success: true,
        message: "Image updated successfully",
        data: updatedUser,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
