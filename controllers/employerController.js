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
        let { logo,coverPhoto,email, contact,instituteName,institueContact,instituteEmail,website, foundingDate,socialNetwork,about,currentCity,pincode,address1,address2,address3 } = req.body;

        // Create an update object
        const updateData = {
            logo,
            coverPhoto,
            email,
            contact,
            instituteName,
            institueContact,
            instituteEmail,
            website,
            foundingDate,
            socialNetwork,
            about,
            pincode,
            address1,
            address2,
            address3,
            currentCity,
            
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
