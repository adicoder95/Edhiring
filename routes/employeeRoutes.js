
const express = require('express');
const router = express.Router();
const { getEmployerProfile, updateEmployerProfile, updateEmployerLogo, updateEmployerCoverPic } = require('../controllers/employeeController');
const { isAuthenticated, isEmployer, auth } = require('../middlewares/auth');

// Route to get the employer profile
router.get('/profile', isAuthenticated, isEmployer, getEmployerProfile);

// Route to update the employer profile
router.put('/profile/update', auth, isEmployer, updateEmployerProfile);
router.put('/profile/logo', auth, isEmployer, updateEmployerLogo);
router.put('/profile/coverPic', auth, isEmployer, updateEmployerCoverPic);

module.exports = router;
