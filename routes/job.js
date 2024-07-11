const express = require('express');
const router = express.Router();
const { createJob, singleJob, updateJob, showJobs } = require('../controllers/Job');
const { protect,isCandidate, isEmployer, isAdmin } = require('../middlewares/auth');

// Jobs routes
router.post('/create',protect, isAdmin, createJob);
router.get('/job/:id', singleJob);
router.put('/job/update/:job_id',protect, isAdmin, updateJob);
router.get('/jobs/show', showJobs);

module.exports = router;
