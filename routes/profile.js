// profile.js routes
const express = require("express");
const router = express.Router();
const { getProfile, updateProfile, uploadResumeTex, getUserTex, getProfileViews } = require("../controllers/profileController");
const { isAuthenticated } = require("../middlewares/auth");

router.get("/", isAuthenticated, getProfile);
router.put("/", isAuthenticated, updateProfile);
router.put("/uploadResumeTex",isAuthenticated,uploadResumeTex);
router.get("/getResumeTex",isAuthenticated,getUserTex);
router.get('/candidate/views', isAuthenticated, getProfileViews);


module.exports = router;
