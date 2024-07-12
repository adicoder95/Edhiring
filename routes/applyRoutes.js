const express = require('express');
const router = express.Router();
const { applyForJob, getAppliedJobs } = require('../controllers/applyController');

const { showJobs } = require('../controllers/Job');
const { protect} = require('../middlewares/auth');


router.post('/apply', protect, applyForJob);
router.get('/applied-jobs', protect, getAppliedJobs);
router.get('/jobs/show', showJobs);


module.exports = router;
