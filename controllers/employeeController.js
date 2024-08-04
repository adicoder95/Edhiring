
const Employer = require("../models/employerProfile");
const recordActivity = require('../services/activityService');
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/cloudinary");
const cloudinary = require("../config/cloudinaryConfig");
const fs = require('fs');
const mongoose = require("mongoose");
const Profile = require('../models/Profile'); 



exports.getEmployerProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('additionalDetails');
            // .exec();
        
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        

        console.log('Additional Details:', user.additionalDetails);
        res.status(200).json({ success: true, employer: user.additionalDetails });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};




exports.updateEmployerProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('additionalDetails');

        console.log("user values"+user);
        if (!user ) {
            return res.status(404).json({ success: false, message: 'Employer profile not found' });
        }


        const employerProfileId = user.additionalDetails;
        let { logo, coverPhoto, email, contact, instituteName, institueContact, instituteEmail, website, foundingDate, socialNetwork, about, currentCity, pincode, address1, address2, address3, fullName } = req.body;

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
            fullName,
        };

        // Remove undefined fields from the update object
        Object.keys(updateData).forEach(key => {
            if (updateData[key] === undefined) {
                delete updateData[key];
            }
        });
        console.log("updated data:"+updateData);
        const employer = await Employer.findByIdAndUpdate(
            employerProfileId,
            updateData,
            { new: true, runValidators: true }
        );
        console.log(employerProfileId);

        await recordActivity(req.user.id, 'Profile', `Updated Profile`); //recent activity

        res.status(200).json({ success: true, employer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};



exports.updateEmployerLogo = async (req, res) => {
    try {
      const profilePic = req.files.logoPic
      const userId = req.user.id
      

      const image = await uploadImageToCloudinary(
        profilePic,
        process.env.FOLDER_NAME,
        1000,
        1000
      )
      console.log(image.secure_url)

      const user = await User.findById(userId).populate('additionalDetails');

      const updatedProfile = await Employer.findByIdAndUpdate(
        user.additionalDetails._id,
        { logo : image.secure_url },
        { new: true }
      );

      await recordActivity(req.user.id, 'Profile', `Updated Logo`); //recent activity

      res.send({
        success: true,
        message: `Image Updated successfully`,
        data: updatedProfile,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };



exports.updateEmployerCoverPic = async (req, res) => {
    try {
      const profilePic = req.files.coverPic
      const userId = req.user.id
      

      const image = await uploadImageToCloudinary(
        profilePic,
        process.env.FOLDER_NAME,
        1000,
        1000
      )
      console.log(image.secure_url)

      const user = await User.findById(userId).populate('additionalDetails');

      const updatedProfile = await Employer.findByIdAndUpdate(
        user.additionalDetails._id,
        { coverPhoto : image.secure_url },
        { new: true }
      );

      await recordActivity(req.user.id, 'Profile', `Updated cover picture`); //recent activity

      res.send({
        success: true,
        message: `Image Updated successfully`,
        data: updatedProfile,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
