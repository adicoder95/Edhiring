const express = require('express');
const router = express.Router();
const { createJob, singleJob, updateJob, showJobs } = require('../controllers/job');
const { isCandidate,isEmployer, isAdmin } = require('../middlewares/auth');



//jobs routes

// /api/job/create
router.post('/create',isAdmin, createJob);
// /api/job/id
router.get('/job/:id', singleJob);
// /api/job/update/job_id
router.put('/job/update/:job_id', isCandidate,isEmployer, isAdmin, updateJob);
// /api/jobs/show
router.get('/jobs/show', showJobs);



module.exports = router;