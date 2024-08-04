// profile.js routes
const express = require("express");
const router = express.Router();
const { getProfile, updateProfile, updateProfilePic } = require("../controllers/profileController");
const { auth,isCandidate } = require("../middlewares/auth");
const upload = require("../middlewares/fileUpload");

router.get("/", auth,isCandidate, getProfile);
router.put("/", auth,isCandidate, updateProfile);
router.put("/updateProfilePic", auth,isCandidate, updateProfilePic);

module.exports = router;
