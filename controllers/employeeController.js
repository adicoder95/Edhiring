
const Employer = require("../models/employerProfile");
const recordActivity = require('../services/activityService');
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/cloudinary");
const cloudinary = require("../config/cloudinaryConfig");
const fs = require('fs');
const mongoose = require("mongoose");
const Candidate = require('../models/Profile'); 



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
      let logoPic, image1;
      let coverPhoto, image2;

      if (req.files && req.files.logoPic) {
        logoPic = req.files.logoPic;
        image1 = await uploadImageToCloudinary(
            logoPic,
            process.env.FOLDER_NAME,
            1000,
            1000
        )
      }
      if (req.files && req.files.coverPhoto) {
        coverPhoto = req.files.coverPhoto;
        image2 = await uploadImageToCloudinary(
            coverPhoto,
            process.env.FOLDER_NAME,
            1000,
            1000
          )
      }
      let { email, contact, instituteType, instituteName, instituteContact, instituteEmail, website, foundingDate, socialNetwork, about, currentCity, pincode, address1, address2, address3, fullName, rating, moreReviews } = req.body;


      // Create an update object
      const updateData = {
          email,
          contact,
          instituteType,
          instituteName,
          instituteContact,
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
          rating,
          moreReviews,
      };

      let updatedProfile1, updatedProfile2;

      if (req.files && req.files.logoPic){
            updatedProfile1 = await Employer.findByIdAndUpdate(
            user.additionalDetails._id,
            { logo : image1.secure_url },
            { new: true }
        );
      }

      if (req.files && req.files.coverPhoto){
            updatedProfile2 = await Employer.findByIdAndUpdate(
            user.additionalDetails._id,
            { coverPhoto : image2.secure_url },
            { new: true }
        );
      }

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


exports.getInstituteInfo = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('additionalDetails');
            // .exec();
        
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        

        console.log('this is the details for a perticular institute :', user.additionalDetails);
        res.status(200).json({ success: true, coverPic: user.additionalDetails.coverPhoto, institutetype:user.additionalDetails.instituteType ,instituteName:user.additionalDetails.instituteName, instituteLocation:user.additionalDetails.currentCity, About:user.additionalDetails.about, instituteRating:user.additionalDetails.rating, instituteReview:user.additionalDetails.moreReviews});
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};


exports.getCandidateProfileById = async (req, res) => {
    try {
      // Extract candidate ID from request body
      const candidateId = req.body.id;
  
      // Find the user by candidate ID
      const candi = await User.findById(candidateId);
      const employer = await User.findById(req.user.id);
      if (!candi) {
        return res.status(404).json({ success: false, message: 'Candidate profile not found' });
      }
  
      // Find the candidate's additional details
      const candidate = await Candidate.findById(candi.additionalDetails);
  
      if (!candidate) {
        return res.status(404).json({ success: false, message: 'Candidate profile info not found' });
      }
  
      // console.log("candidate views: "+employer)
      // Check if the logged-in user's account type is Employer
      if (employer.accountType === 'Employer') {
      //   // Increment profile views and add a timestamp
      //   const timestamp = new Date();
        candidate.ProfileViews.push({ viewedAt: new Date() });
  
      //   // Save the updated candidate profile
        candidate.save();
      }
  
      // Prepare the response object with all relevant information
      const response = {
        success: true,
        candidate,
      };
  
      // Respond with the candidate's complete profile
      res.status(200).json(response);
  
    } catch (error) {
      console.error('Error fetching candidate profile:', error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  };
  
 