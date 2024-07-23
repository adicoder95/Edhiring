
const EmployerProfile = require("../models/employerProfile");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/cloudinary");
const cloudinary = require("../config/cloudinaryConfig");
const fs = require('fs');
const mongoose = require("mongoose");
const Profile = require('../models/Profile'); // Adjust the path as needed



// exports.getEmployerProfile = async (req, res) => {
//     try {
//         const user = await User.findById(req.user.id);
//         // .populate('additionalDetails').exec();

//         if (!user) {
//             return res.status(404).json({ success: false, message: 'User not found' });
//         }

//         console.log('Additional Details:', user.additionalDetails);

//         res.status(200).json({ success: true, employerProfile: user.additionalDetails });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: 'Server error' });
//     }
// };

exports.getEmployerProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
            // .populate('additionalDetails')
            // .exec();
        
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        let additionalDetails;
        if (user.accountType === 'Candidate') {
            additionalDetails = await Profile.findById(user.additionalDetails);
        } else if (user.accountType === 'Employer' || user.accountType === 'Admin') {
            additionalDetails = await EmployerProfile.findById(user.additionalDetails);
        }
        
        // await additionalDetails.save();

        console.log('Additional Details:', additionalDetails);
        res.status(200).json({ success: true, employerProfile: additionalDetails });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};




exports.updateEmployerProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
        // .populate('additionalDetails');

        if (!user || !user.additionalDetails) {
            return res.status(404).json({ success: false, message: 'employer profile not found' });
        }

        const employerProfileId = user.additionalDetails._id;
        let { logo, coverPhoto, email, contact, instituteName, institueContact, instituteEmail, website, foundingDate, socialNetwork, about, currentCity, pincode, address1, address2, address3 } = req.body;

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

        const employerProfile = await EmployerProfile.findByIdAndUpdate(
            employerProfileId,
            updateData,
            { new: true, runValidators: true }
        );

        res.status(200).json({ success: true, employerProfile });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
