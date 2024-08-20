
const express = require('express');
const router = express.Router();
const { getEmployerProfile, updateEmployerProfile, getInstituteInfo } = require('../controllers/employeeController');
const { isAuthenticated, isEmployer, isAdmin, auth } = require('../middlewares/auth');

// Route to get the employer profile
router.get('/profile', isAuthenticated,isAdmin, isEmployer, getEmployerProfile);

// Route to update the employer profile
router.put('/profile/update', auth,isAdmin, isEmployer, updateEmployerProfile);

router.get('/profile/update/inst',auth, isAdmin,isEmployer, getInstituteInfo);


module.exports = router;
