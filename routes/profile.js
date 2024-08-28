// profile.js routes
const express = require("express");
const router = express.Router();
const { getProfile, updateProfile, uploadResumeTex, getUserTex } = require("../controllers/profileController");
const { isAuthenticated } = require("../middlewares/auth");

router.get("/", isAuthenticated, getProfile);
router.put("/", isAuthenticated, updateProfile);
router.put("/uploadResumeTex",isAuthenticated,uploadResumeTex);
router.get("/getResumeTex",isAuthenticated,getUserTex);

module.exports = router;



// ********************************************
// const express = require('express');
// const router = express.Router();
// const { uploadTexFile, saveToCloudinary } = require('../controllers/resumeController');
// const upload = require('../middleware/uploadMiddleware'); // your multer setup

// // Route to upload the .tex file and generate the PDF
// router.post('/upload-tex', upload.single('texFile'), uploadTexFile);

// // Route to save the PDF to Cloudinary
// router.post('/save-to-cloudinary', saveToCloudinary);

// module.exports = router;
