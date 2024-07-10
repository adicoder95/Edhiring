const express = require('express');
const router = express.Router();
const { createJobType, allJobsType, updateJobType, deleteJobType } = require('../controllers/jobsType');
const { isCandidate,isEmployer, isAdmin } = require('../middleware/auth');



//job type routes

// /api/type/create
router.post('/type/create', isCandidate,isEmployer, isAdmin, createJobType)
// /api/type/jobs
router.get('/type/jobs', allJobsType)
// /api/type/update/type_id
router.put('/type/update/:type_id', isCandidate,isEmployer, isAdmin, updateJobType)
// /api/type/delete/type_id
router.delete('/type/delete/:type_id', isCandidate,isEmployer, isAdmin, deleteJobType)








module.exports = router;