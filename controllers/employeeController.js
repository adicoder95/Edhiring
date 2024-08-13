
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
      let logoPic = req.files.logo;
      let coverPic = req.files.coverPhoto;
      let { email, contact, instituteName, institueContact, instituteEmail, website, foundingDate, socialNetwork, about, currentCity, pincode, address1, address2, address3, fullName } = req.body;

      const image1 = await uploadImageToCloudinary(
        logoPic,
        process.env.FOLDER_NAME,
        1000,
        1000
      )
      const image2 = await uploadImageToCloudinary(
        coverPic,
        process.env.FOLDER_NAME,
        1000,
        1000
      )

      // Create an update object
      const updateData = {
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

      const updatedProfile1 = await Employer.findByIdAndUpdate(
        user.additionalDetails._id,
        { logo : image1.secure_url },
        { new: true }
      );

      const updatedProfile2 = await Employer.findByIdAndUpdate(
        user.additionalDetails._id,
        { coverPhoto : image2.secure_url },
        { new: true }
      );

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
          updatedProfile1,
          updatedProfile2,
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


