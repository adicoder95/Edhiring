const express = require('express');
const router = express.Router();
const { createJobType, allJobsType, updateJobType, deleteJobType } = require('../controllers/jobType');
const { protect, isEmployer } = require('../middlewares/auth');

// Job type routes
router.post('/type/create', protect, isEmployer, createJobType);
router.post('/type/jobs', allJobsType);
router.put('/type/update/:type_id', protect, isEmployer, updateJobType);
router.delete('/type/delete/:type_id', protect, isEmployer, deleteJobType);

module.exports = router;
