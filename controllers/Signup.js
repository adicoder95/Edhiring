const bcrypt = require("bcryptjs")
const Signup = require("../models/Signup")
const OTP = require("../models/OTP")
const otpGenerator = require("otp-generator")
const mailSender = require("../utils/mailSender")
require("dotenv").config()


// Signup Controller
exports.signup = async (req, res) => {
    try {
  
      const {
        firstName,
        lastName,
        email,
        password,
        accountType,
        otp,
      } = req.body
  
      // Check All Details 
      if (
        !firstName ||
        !lastName ||
        !email ||
        !password ||
        !otp ||
        !accountType
      ) {
        return res.status(403).send({
          success: false,
          message: "All Fields are required",
        })
      }

      // Check if user already exists
      const existingUser = await Signup.findOne({ email })
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "User already exists. Login to continue",
        })
      }
  
      // Find the most recent OTP for the email
      const response = await otp.find({ email }).sort({ createdAt: -1 }).limit(1)// to get most recent entry
      console.log(response)
      if (response.length === 0) {
        // OTP not found
        return res.status(400).json({
          success: false,
          message: "Inavlid OTP",
        })
      } else if (otp !== response[0].otp) {
        // Invalid OTP
        return res.status(400).json({
          success: false,
          message: "Inavlid OTP",
        })
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10)
  
      const user = await Signup.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        accountType: accountType,
      })
  
      return res.status(200).json({
        success: true,
        user,
        message: "User registered successfully",
      })
    }

    catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: "User cannot be registered. Please try again.",
      })
    }
  }
  

// Send OTP For Email Verification
exports.sendotp = async (req, res) => {
    try {
      const { email } = req.body
      const checkUserPresent = await Signup.findOne({ email })
      // to be used in case of signup
      // If user found with provided email
      if (checkUserPresent) {
        return res.status(401).json({
          success: false,
          message: `User is Already Registered`,
        })
      }
  
      var otp = otpGenerator.generate(6, {//6 length otp
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      })
      //check unique otp or not
      let result = await OTP.findOne({ otp: otp })
      console.log("Result is Generate OTP Func")
      console.log("OTP", otp)
      console.log("Result", result)
      while (result) {
        otp = otpGenerator.generate(6, {
          upperCaseAlphabets: false,
          lowerCaseAlphabets: false,
          specialChars: false,
        })
        result = await OTP.findOne({ otp: otp })
  
      }
  
      const otpPayload = { email, otp }
      const otpBody = await OTP.create(otpPayload)
      console.log("OTP Body", otpBody)
      res.status(200).json({
        success: true,
        message: `OTP Sent Successfully`,
        otp,
      })
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({ 
          success: false, 
          error: error.message 
      })
    }
  }
  