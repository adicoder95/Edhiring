const employerProfile = require("../models/employerProfile");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/cloudinary");
const cloudinary = require("../config/cloudinaryConfig");
const fs = require('fs');



exports.getemployerProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('additionalDetails');
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, employerprofile: user.additionalDetails });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.updateemployerProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('additionalDetails');

        // Ensure user and additionalDetails exist
        if (!user || !user.additionalDetails) {
            return res.status(404).json({ success: false, message: 'User or employerprofile not found' });
        }

        const employerprofileId = user.additionalDetails._id;
        let { employerprofilePic, gender, contactNumber, currentCity, dateOfBirth, about } = req.body;

        // Format the dateOfBirth to remove the time part
        if (dateOfBirth) {
            dateOfBirth = new Date(dateOfBirth);
            dateOfBirth.setUTCHours(0, 0, 0, 0); // Set time to 00:00:00
        }

        // Create an update object
        const updateData = {
            employerprofilePic,
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

        const employerprofile = await employerProfile.findByIdAndUpdate(
            employerprofileId,  // Assuming _id is used to identify employerProfile
            updateData,
            { new: true, runValidators: true }
        );

        res.status(200).json({ success: true, employerprofile});
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
        folder: "employerprofile_pictures",
      });
  
      // Remove the file from local storage after upload
      fs.unlinkSync(file.path);
  
      // Update the user's employerprofile picture URL in the database
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { employerprofilePic: result.secure_url },
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
