const express = require('express');
const router = express.Router();
const { createJobType, allJobsType, updateJobType, deleteJobType } = require('../controllers/jobType');
const { isCandidate, isEmployer, isAdmin } = require('../middlewares/auth');

// Job type routes
router.post('/type/create', isAdmin, createJobType);

router.get('/type/jobs', allJobsType);
router.put('/type/update/:type_id', isAdmin, updateJobType);
router.delete('/type/delete/:type_id', isAdmin, deleteJobType);

module.exports = router;
