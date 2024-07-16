const express = require('express');
const router = express.Router();
const { createJob, singleJob, updateJob, showJobs, getJobApplications, updateApplicationStatus } = require('../controllers/job');
const { isAuthenticated, protect, isCandidate, isEmployee, isAdmin } = require('../middlewares/auth');

// Jobs routes
router.post('/create', isAuthenticated, isEmployee, createJob);
router.get('/job/:id', protect, isEmployee, singleJob);
router.put('/job/update/:id',protect, isAdmin, updateJob);
router.get('/jobs/show', showJobs);
// // GET /api/v1/jobs/:jobId/applications
// router.get('/:jobId/applications', protect, getJobApplications);

// Route to get applications for jobs created by the logged-in employer
router.post("/applications", isAuthenticated, isEmployee, getJobApplications);

// Route to update the status of a job application
router.post('/update-status', isAuthenticated, isEmployee, updateApplicationStatus);


module.exports = router;