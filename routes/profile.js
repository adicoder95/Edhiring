// profile.js routes
const express = require("express");
const router = express.Router();
const { getProfile, updateProfile, uploadResumeTex } = require("../controllers/profileController");
const { auth } = require("../middlewares/auth");
const upload = require("../middlewares/fileUpload");

router.get("/", auth, getProfile);
router.put("/", auth, updateProfile);
router.put("/uploadResumeTex",auth,uploadResumeTex);

module.exports = router;