// Import the required modules
const express = require("express")
const router = express.Router()

// Import the Controllers

// Job Controllers Import
const {
  createJob,
  getAllJobs,
  getJobDetails,
  getFullJobDetails,
  editJob,
  getEmployerJobs,
  deleteJob,
} = require("../controllers/Job")


// Importing Middlewares
const { auth, isEmployer, isCandidate, isAdmin } = require("../middlewares/auth")

// Jobs can Only be Created by Employers
router.post("/createJob", auth, isEmployer, createJob)
// Get all Registered Jobs
router.get("/getAllJobs", getAllJobs)
// Get Details for a Specific Jobs
router.post("/getJobDetails", getJobDetails)
// Get Details for a Specific Jobs
router.post("/getFullJobDetails", auth, getFullJobDetails)
// Edit Job routes
router.post("/editJob", auth, isEmployer, editJob)
// Get all Jobs Under a Specific Employer
router.get("/getEmployerJobs", auth, isEmployer, getEmployerJobs)
// Delete a Job
router.delete("/deleteJob", deleteJob)


module.exports = router