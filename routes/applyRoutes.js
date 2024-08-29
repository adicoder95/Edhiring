const express = require('express');
const router = express.Router();
const { applyForJob, getAppliedJobs } = require('../controllers/applyController');

const { showJobs } = require('../controllers/job');
const { protect, auth, isCandidate} = require('../middlewares/auth');


router.post('/apply', auth, isCandidate, applyForJob);
router.get('/applied-jobs', auth, isCandidate, getAppliedJobs);
router.get('/jobs/show', showJobs);


module.exports = router;
