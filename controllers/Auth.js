const bcrypt = require("bcryptjs")
const User = require("../models/User")
const OTP = require("../models/OTP")
const jwt = require("jsonwebtoken")
const otpGenerator = require("otp-generator")
const mailSender = require("../utils/mailSender")
const Candidate = require("../models/Profile")
const employer = require("../models/employerProfile")
require("dotenv").config()

// Signup Controller for Registering USers

exports.signup = async (req, res) => {
  try {
    // Destructure fields from the request body
    const {
      firstName,
      lastName,
      email,
      password,
      contact,
      accountType,
      otp,
    } = req.body
    // Check if All Details are there or not
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !contact ||
      !accountType ||
      !otp
    ) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      })
    }
    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please sign in to continue.",
      })
    }

    // Find the most recent OTP for the email
    const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1)
    console.log(response)
    if (response.length === 0) {
      // OTP not found for the email
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      })
    } else if (otp !== response[0].otp) {
      // Invalid OTP
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      })
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log("hs ");

    // Create the Additional Profile For User
    let additionalDetails;
    if (accountType === 'Candidate') {
      additionalDetails = await Candidate.create({
        gender: 'Not specified',
        dateOfBirth: new Date('2000-01-01'),
        about: 'No details provided',
      });
    } else if (accountType === 'Employer') {
      console.log('generating Employer');
      additionalDetails = await employer.create({
        logo: 'logo.png',
        coverPhoto: 'coverpic.png',
        email,
        contact: 123456789,
        instituteName: 'ABC',
        institueContact: 1234567,
        instituteEmail: 'example.gmail.com',
        website: 'abc.com',
        foundingDate: '',
        socialNetwork: 'abc.example.com',
        about: 'abcde',
        pincode: 12345,
        address1: 'abc ',
        address2: '',
        address3: '',
        currentCity: '',
        fullName: 'abc',
        // Add other default fields as needed
      });
    }
    console.log('employer created');

    let user;
    if(accountType=='Admin'){
        user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        contact,
        accountType,
        additionalDetails: '',
        image: "",
      })
    } else{
        user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        contact,
        accountType,
        additionalDetails: additionalDetails._id,
        image: "",
      })
    }
    return res.status(200).json({
      success: true,
      user,
      message: "User registered successfully",
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    })
  }
}

// Login controller for authenticating users
exports.login = async (req, res) => {
  try {
    // Get email and password from request body
    const { email, password } = req.body

    // Check if email or password is missing
    if (!email || !password) {
      // Return 400 Bad Request status code with error message
      return res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      })
    }

    // Find user with provided email
    const user = await User.findOne({ email })
    // .populate("additionalDetails");

    // If user not found with provided email
    if (!user) {
      // Return 401 Unauthorized status code with error message
      return res.status(401).json({
        success: false,
        message: `User is not Registered with Us Please SignUp to Continue`,
      })
    }

    // Generate JWT token and Compare Password
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { email: user.email, id: user._id, role: user.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      )
      
      // Save token to user document in database
      user.token = token
      user.password = undefined
      // Set cookie for token and return success response
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      }
      const additionalDetails=user.additionalDetails
      const Profile = await Candidate.findById(additionalDetails);
      // console.log("candidate testing: " + candidate)
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        Profile,
        message: `User Login Success`,
      })
    } else {
      return res.status(401).json({
        success: false,
        message: `Password is incorrect`,
      })
    }
  } catch (error) {
    console.error(error)
    // Return 500 Internal Server Error status code with error message
    return res.status(500).json({
      success: false,
      message: `Login Failure Please Try Again`,
    })
  }
}

// Send OTP For Email Verification
exports.sendotp = async (req, res) => {
  try {
    const { email } = req.body

    // Check if user is already present
    // Find user with provided email
    const checkUserPresent = await User.findOne({ email })
    // to be used in case of signup

    // If user found with provided email
    if (checkUserPresent) {
      // Return 401 Unauthorized status code with error message
      return res.status(401).json({
        success: false,
        message: `User is Already Registered`,
      })
    }

    var otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    })
    const result = await OTP.findOne({ otp: otp })
    console.log("Result is Generate OTP Func")
    console.log("OTP", otp)
    console.log("Result", result)
    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      })
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
    return res.status(500).json({ success: false, error: error.message })
  }
}


exports.auth = async (req, res) => {
  // Extracting JWT from request cookies, body, or header
  const token =
    req.cookies.token ||
    req.body.token ||
    req.header('Authorization').replace('Bearer ', '');

  // If JWT is missing, return 401 Unauthorized response
  if (!token) {
    return res.status(401).json({ success: false, message: 'Token Missing' });
  }

  // Verifying the JWT using the secret key stored in environment variables
  const decode = await jwt.verify(token, process.env.JWT_SECRET);

  if (!decode) {
    // If JWT verification fails, return 401 Unauthorized response
    return res.status(401).json({ success: false, message: 'Token is invalid' });
  }

  // Storing the decoded JWT payload in the request object for further use
  req.user = decode;

  // Return success response if token is valid
  return res.status(200).json({ success: true, message: 'Token is valid', user: req.user ,accountType:req.user.accountType});
};
