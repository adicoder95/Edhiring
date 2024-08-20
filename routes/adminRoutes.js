const express = require('express');
const router = express.Router();
const { getEmployersData, getCandidatesData } = require('../controllers/adminController');
const { isAdmin, auth } = require('../middlewares/auth');


// Route to get employers' data
router.get('/employers',auth, isAdmin, getEmployersData);

router.get('/candidates',auth, isAdmin, getCandidatesData);
module.exports = router;
