// profile.js routes
const express = require("express");
const router = express.Router();
const { getProfile, updateProfile, updateDisplayPicture } = require("../controllers/profileController");
const { auth, isAuthenticated } = require("../middlewares/auth");
const upload = require("../middlewares/fileUpload");

router.get("/", isAuthenticated, getProfile);
router.put("/", auth, updateProfile);
router.put("/updateDisplayPicture", auth, upload.single('displayPicture'), updateDisplayPicture);

module.exports = router;
