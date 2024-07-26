const express = require('express');
const router = express.Router();
const { applyForJob, getAppliedJobs } = require('../controllers/applyController');

const { showJobs } = require('../controllers/job');
const { protect, auth} = require('../middlewares/auth');


router.post('/apply', auth, applyForJob);
router.get('/applied-jobs', auth, getAppliedJobs);
router.get('/jobs/show', showJobs);


module.exports = router;
