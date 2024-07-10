const express = require('express');
const router = express.Router();
const { createJob, singleJob, updateJob, showJobs } = require('../controllers/Job');
const { isCandidate, isEmployer, isAdmin } = require('../middlewares/auth');

// Jobs routes
router.post('/create', isAdmin, createJob);
router.get('/job/:id', singleJob);
router.put('/job/update/:job_id', isAdmin, updateJob);
router.get('/jobs/show', showJobs);

module.exports = router;
