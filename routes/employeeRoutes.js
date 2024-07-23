
const express = require('express');
const router = express.Router();
const { getEmployerProfile, updateEmployerProfile } = require('../controllers/employeeController');
const { isAuthenticated, isEmployer } = require('../middlewares/auth');

// Route to get the employer profile
router.get('/profile', isAuthenticated, isEmployer, getEmployerProfile);

// Route to update the employer profile
router.put('/profile/update', isAuthenticated, isEmployer, updateEmployerProfile);

module.exports = router;
