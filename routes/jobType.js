const express = require('express');
const router = express.Router();
const { createJobType, allJobsType, updateJobType, deleteJobType } = require('../controllers/jobType');
const { protect, isAdmin } = require('../middlewares/auth');

// Job type routes
router.post('/type/create', protect, isAdmin, createJobType);
router.post('/type/jobs', allJobsType);
router.put('/type/update/:type_id', protect, isAdmin, updateJobType);
router.delete('/type/delete/:type_id', protect, isAdmin, deleteJobType);

module.exports = router;
