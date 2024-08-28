const user = require('../models/User')
const Job = require('../models/job');
const JobType = require('../models/jobType');
const Application = require('../models/jobApplicationModel');
const recordActivity = require('../services/activityService');

//create job
let jobCount = 0; // Initialize outside the function

exports.createJob = async (req, res, next) => {
    try {

        const job = await Job.create({
            title: req.body.title,
            description: req.body.description,
            salary: req.body.salary,
            location: req.body.location,
            jobType: req.body.jobType,
            user: req.user.id
        });

        jobCount++; // Increment the job count
        console.log(`Total jobs created: ${jobCount}`);

        // Update job to include application reference
        // job.applications.push(Application._id);
        await job.save();

        await recordActivity(req.user.id, 'JobCreated', `Successfully created job: ${job}`); //recent activity

        res.status(201).json({
            success: true,
            job
        });
    } catch (error) {
        next(error);
    }
};


// Fetch job details and increment views
exports.singleJob = async (req, res, next) => {
    try {
        const job = await Job.findById(req.body.id);
        if (!job) {
            return res.status(404).json({
                success: false,
                message: 'Job not found'
            });
        }

        // Increment views
        job.views += 1;
        await job.save();

        res.status(200).json({
            success: true,
            job
        });
    } catch (error) {
        next(error);
    }
};


//update job by id.
exports.updateJob = async (req, res, next) => {
    try {
        const job = await Job.findByIdAndUpdate(req.body.id, req.body, { new: true });

        await recordActivity(req.user.id, 'JobUpdated', `Successfully Updated job: ${job}`); //recent activity

        res.status(200).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}


exports.getJobsByEmployer = async (req, res) => {
    try {
      // Fetch the employer ID from the authenticated user (assuming JWT middleware is used)
      const employerId = req.user.id;
  
      // Find all jobs created by this employer
      const jobs = await Job.find({ user: employerId });

      console.log("employee id"+jobs);
  
      // Check if jobs are found
      if (!jobs.length) {
        return res.status(404).json({
          success: false,
          message: 'No jobs found for this employer',
        });
      }
  
      // Return the jobs
      return res.status(200).json({
        success: true,
        total_Jobs: jobs.length,
        jobs,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: 'Server error',
        error: error.message,
      });
    }
  };



exports.showJobs = async (req, res, next) => {
    try {
        const { keyword, location, jobType, title, salary } = req.body;

        // Create an empty query object
        let query = {};

        // If keyword is provided, create a regex to match any of the words in jobType or title
        if (keyword) {
            const keywords = keyword.split(' ');
            const regex = new RegExp(keywords.join('|'), 'i');
            query.$or = [
                { jobType: { $regex: regex } },
                { title: { $regex: regex } }
            ];
        }

        // Add location filter 
        if (location) {
            query.location = location;
        }

        // Add jobType filter 
        if (jobType) {
            query.jobType = jobType;
        }

        // Add title filter 
        if (title) {
            query.title = title;
        }
        //Add perticular salary filter
        if (salary) {
            query.salary = salary;
        }


        // Find jobs that match the query
        const jobs = await Job.find(query);

        res.status(200).json({
            success: true,
            jobs
        });
    } catch (error) {
        next(error);
    }
};


exports.getJobApplications = async (req, res) => {
    try {
        const jobId = req.body.jobId;

        console.log('Fetching candidates for Job ID:', jobId);

        // Find all job applications for the specified job ID and populate candidate details
        const jobApplications = await Application.find({ job: jobId })
            .populate({
                path: 'candidate',
                populate: {
                    path: 'additionalDetails',
                    select: 'PersonalDetails.Full_Name PersonalDetails.Profile_Pic PersonalDetails.Job_Role'
                }
            });

        console.log('Job Applications found:', jobApplications);

        if (!jobApplications || jobApplications.length === 0) {
            return res.status(404).json({ success: false, message: 'No candidates found for this job' });
        }

        const response = {
            success: true,
            candidates: jobApplications.map(application => {
                const candidate = application.candidate;

                console.log('Candidate:', candidate);

                if (candidate && candidate.additionalDetails && candidate.additionalDetails.PersonalDetails) {
                    return {
                        _id: candidate._id, // Candidate ID
                        Full_Name: candidate.additionalDetails.PersonalDetails.Full_Name || 'N/A', // Full Name
                        Job_Role: candidate.additionalDetails.PersonalDetails.Job_Role || 'N/A', // Job Role
                        Profile_Pic: candidate.additionalDetails.PersonalDetails.Profile_Pic || 'N/A', // Profile Picture
                    };
                } else {
                    return {
                        _id: candidate ? candidate._id : 'N/A', // Candidate ID (may be just the ID if not populated)
                        Full_Name: 'N/A',
                        Job_Role: 'N/A',
                        Profile_Pic: 'N/A',
                    };
                }
            }),
        };

        console.log('Response:', response);

        res.status(200).json(response);

    } catch (error) {
        console.error('Error fetching candidates:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};


exports.updateApplicationStatus = async (req, res, next) => {
    try {
        const { applicationId, status } = req.body;
        const employer = await user.findById(req.user.id); 

        const application = await Application.findById(applicationId);
        if (!application) {
            return res.status(404).json({ success: false, message: 'Application not found' });
        }

        await application.updateStatus(status, employer.email, employer.emailPassword);
        await recordActivity(req.user.id, 'updatedApplicationStatus', `Successfully updated status for application: ${applicationId}`); //recent activity

        res.json({ success: true, message: 'Job application status updated and notification sent' });
    } catch (error) {
        console.error('Error updating application status: ', error.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

//deleting job
exports.deleteJob = async (req, res, next) => {
    try {
        const jobId = req.body.id;
        const userId = req.user.id;

        // Find the job by ID
        const job = await Job.findById(jobId);

        if (!job) {
            return res.status(404).json({
                success: false,
                message: 'Job not found'
            });
        }

        // Check if the job belongs to the user
        if (job.user.toString() !== userId) {
            return res.status(401).json({
                success: false,
                message: 'You are not authorized to delete this job'
            });
        }

        // Delete the job
        await Job.findByIdAndDelete(jobId);

        // Record activity
        await recordActivity(userId, 'JobDeleted', `Successfully deleted job: ${job.title}`);

        jobCount--;
        res.status(200).json({
            success: true,
            message: 'Job deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};


exports.toggleStarredJob = async (req, res) => {
try {
    const userId = req.user.id; // Assuming you have user authentication in place
    const { jobId } = req.body;

    const job = await Job.findById(jobId);

    if (!job) {
    return res.status(404).json({ success: false, message: "Job not found" });
    }

    const index = job.starredBy.indexOf(userId);

    if (index === -1) {
    job.starredBy.push(userId); // Add user to starredBy array
    } else {
    job.starredBy.splice(index, 1); // Remove user from starredBy array
    }

    await job.save();

    return res.status(200).json({ 
    success: true, 
    message: `Job ${index === -1 ? 'starred' : 'unstarred'} successfully`,
    });
} catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, error: error.message });
}
};
  


exports.getStarredJobs = async (req, res) => {
    try {
    const userId = req.user.id; // Assuming you have user authentication in place

    const jobs = await Job.find({ starredBy: userId });

    return res.status(200).json({ success: true, jobs });
    } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, error: error.message });
    }
};
  


exports.getJobLocation = async (req, res) => {
try {
    const job = [
    {
        image:'https://res.cloudinary.com/dinuxkvxh/image/upload/v1724844933/location0_a7kfrt.jpg',
        location:'New Delhi, India',
        position:'Software Engineer',
        salary:'140000',
        date:'2024-07-11T08:18:45.928+00:00'
    },
    {
        image:'https://res.cloudinary.com/dinuxkvxh/image/upload/v1724844932/location1_kqxfqi.jpg',
        location:'Gurugram, Haryana India',
        position:'Data Analyst',
        salary:'160000',
        date:'2024-07-11T08:19:28.893+00:00'
    },
    {
        image:'https://res.cloudinary.com/dinuxkvxh/image/upload/v1724844932/location2_re56ab.jpg',
        location:'Mumbai, India',
        position:'Full Stack Developer',
        salary:'150000',
        date:'2024-07-29T12:54:20.118+00:00'
    },
    {
        image:'https://res.cloudinary.com/dinuxkvxh/image/upload/v1724844932/location3_vtpcxk.jpg',
        location:'Chennai, India',
        position:'Software Engineer',
        salary:'120000',
        date:'2024-08-26T15:48:35.990+00:00'
    }
]

    res.status(200).json({ success: true, job });

} catch (error) {
    res.status(500).json({ success: false, message: error.message });
}
};