const express = require('express');
const router = express.Router();
const { createAccountType, allAccountType, updateAccountType, deleteAccountType } = require('../controllers/accountType');
const { isCandidate,isEmployer, isAdmin } = require('../middleware/auth');



//job type routes

// /api/type/create
router.post('/type/create', isCandidate,isEmployer, isAdmin, createAccountType)
// /api/type/jobs
router.get('/type/jobs', allAccountType)
// /api/type/update/type_id
router.put('/type/update/:type_id', isCandidate,isEmployer, isAdmin, updateAccountType)
// /api/type/delete/type_id
router.delete('/type/delete/:type_id', isCandidate,isEmployer, isAdmin, deleteAccountType)








module.exports = router;
