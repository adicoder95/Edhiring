
const express = require('express');
const router = express.Router();
const { getEmployerProfile, updateEmployerProfile } = require('../controllers/employeeController');
const { isAuthenticated, isEmployee } = require('../middlewares/auth');

// Route to get the employer profile
router.get('/profile', isAuthenticated, isEmployee, getEmployerProfile);

// Route to update the employer profile
router.put('/profile/update', isAuthenticated, isEmployee, updateEmployerProfile);

module.exports = router;
