const express = require('express');
const router = express.Router();
const { getEmployersData, getCandidatesData } = require('../controllers/adminController');
const { isAdmin, auth, isAuthenticated } = require('../middlewares/auth');


// Route to get employers' data
router.get('/employers',auth, isAuthenticated, isAdmin, getEmployersData);

router.get('/candidates',auth, isAuthenticated, isAdmin, getCandidatesData);
module.exports = router;
