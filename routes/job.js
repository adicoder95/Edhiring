const express = require('express');
const router = express.Router();
const { createJob, singleJob, updateJob, showJobs, getJobApplications, updateApplicationStatus } = require('../controllers/Job');
const { isAuthenticated, protect, isCandidate, isEmployer, isAdmin } = require('../middlewares/auth');

// Jobs routes
router.post('/create',protect, isAdmin, createJob);
router.get('/job/:id', protect, isAdmin, singleJob);
router.put('/job/update/:id',protect, isAdmin, updateJob);
router.get('/jobs/show', showJobs);
// // GET /api/v1/jobs/:jobId/applications
// router.get('/:jobId/applications', protect, getJobApplications);

// Route to get applications for jobs created by the logged-in employer
router.post("/applications", isAuthenticated, isAdmin, getJobApplications);

// Route to update the status of a job application
router.put('/applications/:applicationId/status', protect, isAdmin, updateApplicationStatus);


module.exports = router;
