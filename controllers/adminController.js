// controllers/adminController.js
const Employers = require('../models/employerProfile'); 
const User = require('../models/User'); 
const Candidate = require('../models/Profile');
const Job = require('../models/job');
const JobApp = require('../models/jobApplicationModel');


exports.getEmployersData = async (req, res) => {
  try {
    // Fetch all employers and their details
    const employers = await User.find({ accountType: 'Employer' }).populate('additionalDetails');

    // Return the count and details of employers
    res.status(200).json({
      success: true,
      count: employers.length,
      employers,
    });
  } catch (error) {
    console.error('Error fetching employers data:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};


exports.getCandidatesData = async (req, res) => {
  try {
    // Fetch all candidates and their details
    const candidates = await User.find({ accountType: 'Candidate' }).populate('additionalDetails');

    // Return the count and details of candidates
    res.status(200).json({
      success: true,
      count: candidates.length,
      candidates,
    });
  } catch (error) {
    console.error('Error fetching candidates data:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};


exports.getTotaljobs = async (req, res) => {
  try {
    // Fetch all jobs
    const jobs = await Job.find();

    // Get total number of jobs
    const totalJobs = jobs.length;

    // Group jobs by creation date
    const jobsByDate = jobs.reduce((acc, job) => {
      const date = job.createdAt.toISOString().split('T')[0]; // Extract date part from createdAt
      if (!acc[date]) {
        acc[date] = 0;
      }
      acc[date]++;
      return acc;
    }, {});

    // Format the response
    res.status(200).json({
      success: true,
      totalJobs,
      jobsByDate
    });
  } catch (error) {
    console.error('Error fetching jobs data:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};



exports.getTotalHiring = async (req, res) => {
  try {
    // Fetch all candidates and their details
    const Hiring = await JobApp.find({ status: 'Accepted' });

    // Return the count and details of candidates
    res.status(200).json({
      success: true,
      count: Hiring.length
    });
  } catch (error) {
    console.error('Error fetching candidates data:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};