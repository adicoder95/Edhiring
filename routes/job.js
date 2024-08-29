const express = require('express');
const router = express.Router();

const { createJob, singleJob, updateJob, showJobs, getJobApplications, updateApplicationStatus, deleteJob, getJobsByEmployer, toggleStarredJob, getStarredJobs, getJobLocation} = require('../controllers/job');

const { isAuthenticated, protect, isCandidate, isEmployer, isAdmin } = require('../middlewares/auth');

// Jobs routes
router.post('/create', isAuthenticated, isEmployer, createJob);
router.get('/employer/jobs', isAuthenticated, isEmployer, getJobsByEmployer);
router.put('/job/id', isAuthenticated, singleJob);
router.put('/job/update/id',isAuthenticated, isEmployer, updateJob);
router.get('/jobs/show', showJobs);

// Route to get applications for jobs created by the logged-in employer
router.post("/applications", isAuthenticated, isEmployer, getJobApplications);

// Route to update the status of a job application
router.post('/update-status', isAuthenticated, isEmployer, updateApplicationStatus);
// router.delete('/delete/:_id', isAuthenticated, isEmployer, deleteJob);

router.delete('/job/delete/id', isAuthenticated, isEmployer, deleteJob);

router.post('/jobs/togglestar', isAuthenticated, toggleStarredJob);
router.get('/jobs/starred', isAuthenticated, getStarredJobs);

router.get('/jobs/location', isAuthenticated, getJobLocation);

module.exports = router;