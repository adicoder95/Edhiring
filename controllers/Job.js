const Job = require("../models/Job")
const Category = require("../models/Category")
const User = require("../models/User")
const { uploadImageToCloudinary } = require("../utils/imageUploader")
const { convertSecondsToDuration } = require("../utils/secToDuration")





// Function to create a new Job
exports.createJob = async (req, res) => {
  try {
    // Get user ID from request object
    const UserId = req.User.id

    // Get all required fields from request body
    let {
      jobTitle,
      jobDescription,
      employer,
      location,
      stipend,
      skillsReq:_skillsReq,
      status,
      jobType,
    } = req.body

    // Get thumbnail image from request files
    const thumbnail = req.files.thumbnailImage

    // Convert the tag and instructions from stringified Array to Array
    const skillsReq = JSON.parse(_skillsReq)

    console.log("skillsReq", skillsReq)

    // Check if any of the required fields are missing
    if (
      !jobTitle ||
      !jobDescription ||
      !jobType
    ) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Mandatory",
      })
    }
    if (!status || status === undefined) {
      status = "Apply now"
    }

    // Check if the user is an employer
    const employerDetails = await User.findById(UserId, {
      accountType: "Employer",
    })

    if (!employerDetails) {
      return res.status(404).json({
        success: false,
        message: "employer Details Not Found",
      })
    }

    // Check if the tag given is valid
    const categoryDetails = await Category.findById(category)
    if (!categoryDetails) {
      return res.status(404).json({
        success: false,
        message: "Category Details Not Found",
      })
    }
    // Upload the Thumbnail to Cloudinary
    const thumbnailImage = await uploadImageToCloudinary(
      thumbnail,
      process.env.FOLDER_NAME
    )
    console.log(thumbnailImage)

    // Create a new Job with the given details
    const newJob = await Job.create({
      JobTitle,
      JobDescription,
      employer: employerDetails._id,
      stipend,
      location,
      thumbnail: thumbnailImage.secure_url,
      status: status,
      jobType:jobType,
      skillsReq
    })

    // Add the new Job to the User Schema of the employer
    await User.findByIdAndUpdate(
      {_id: employerDetails._id,},
      {
        $push: {
          Jobs: newJob._id,
        },
      },
      { new: true }//to get updated response
    )

    // Return the new Job and a success message
    res.status(200).json({
      success: true,
      data: newJob,
      message: "Job Created Successfully",
    })
  } catch (error) {

    // Handle any errors that occur during the creation of the Job
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Failed to create Job",
      error: error.message,
    })
  }
}








// Edit Job Details
exports.editJob = async (req, res) => {
  try {
    const { JobId } = req.body
    const updates = req.body
    const Job = await Job.findById(JobId)

    if (!Job) {
      return res.status(404).json({ error: "Job not found" })
    }

    // If Thumbnail Image is found, update it
    if (req.files) {
      console.log("thumbnail update")
      const thumbnail = req.files.thumbnailImage
      const thumbnailImage = await uploadImageToCloudinary(
        thumbnail,
        process.env.FOLDER_NAME
      )
      Job.thumbnail = thumbnailImage.secure_url
    }

    // Update only the fields that are present in the request body
    for (const key in updates) {
      if (updates.hasOwnProperty(key)) {
        if (key === "skillsReq") {
          Job[key] = JSON.parse(updates[key])
        } else {
          Job[key] = updates[key]
        }
      }
    }

    await Job.save()

    const updatedJob = await Job.findOne({
      _id: JobId,
    })
      .populate({
        path: "employer",
        populate: {
          path: "additionalDetails",
        },
      })
      .populate("skillsReq")
      
      .exec()

    res.json({
      success: true,
      message: "Job updated successfully",
      data: updatedJob,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    })
  }
}








// Get Job List
exports.getAllJobs = async (req, res) => {
  try {
    const allJobs = await Job.find(
      { status: "Apply now" },
      {
        JobTitle: true,
        stipend: true,
        thumbnail: true,
        employer: true,
      }
    )
      .populate("employer")
      .exec()

    return res.status(200).json({
      success: true,
      message:"Data for all Jobs fetched successfully",
      data: allJobs,
    })
  } catch (error) {
    console.log(error)
    return res.status(404).json({
      success: false,
      message: `Can't Fetch Job Data`,
      error: error.message,
    })
  }
}








exports.getJobDetails = async (req, res) => {
  try {
    const { JobId } = req.body
    const JobDetails = await Job.findOne({
      _id: JobId,
    })
      .populate({
        path: "employer",
        populate: {
          path: "additionalDetails",
        },
      })
      .populate({
        path: "JobContent",
      })
      .exec()

    if (!JobDetails) {
      return res.status(400).json({
        success: false,
        message: `Could not find Job with id: ${JobId}`,
      })
    }

    return res.status(200).json({
      success: true,
      data: {
        JobDetails,
      },
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}







exports.getFullJobDetails = async (req, res) => {
  try {
    const { JobId } = req.body
    const UserId = req.User.id
    const JobDetails = await Job.findOne({
      _id: JobId,
    })
      .populate({
        path: "employer",
        populate: {
          path: "additionalDetails",
        },
      })
      .populate({
        path: "JobContent",
      })
      .exec()

    let JobProgressCount = await JobProgress.findOne({
      JobID: JobId,
      UserId: UserId,
    })

    console.log("JobProgressCount : ", JobProgressCount)

    if (!JobDetails) {
      return res.status(400).json({
        success: false,
        message: `Could not find Job with id: ${JobId}`,
      })
    }

    return res.status(200).json({
      success: true,
      data: {
        JobDetails
      },
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}








// Get a list of Job for a given employer
exports.getemployerJobs = async (req, res) => {
  try {
    // Get the employer ID from the authenticated user or request body
    const employerId = req.User.id

    // Find all Jobs belonging to the employer
    const employerJobs = await Job.find({
      employer: employerId,
    }).sort({ createdAt: -1 })

    // Return the employer's Jobs
    res.status(200).json({
      success: true,
      data: employerJobs,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Failed to retrieve employer Jobs",
      error: error.message,
    })
  }
}








// Delete the Job
exports.deleteJob = async (req, res) => {
  try {
    const { JobId } = req.body

    // Find the Job
    const Job = await Job.findById(JobId)
    if (!Job) {
      return res.status(404).json({ message: "Job not found" })
    }

    // Delete the Job
    await Job.findByIdAndDelete(JobId)

    return res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    })
  }
}