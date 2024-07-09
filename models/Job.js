const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
	jobTitle: { 
        type: String 
    },
	jobDescription: {
         type: String 
    },
    location: {
        type: String 
    },
	employer: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
	stipend: {
		type: Number,
	},
	skillsReq: {
		type: [String],
	},
	thumbnail: {
		type: String,
	},
	status: {
		type: String,
		enum: ["Apply now", "Applied","Mark as not interested"],
	},
    jobType: {
		type: String,
		enum: ["Internship", "Work from home","Full-time","Fresher","Part-time"],
	},
	createdAt: {
		type:Date,
		default:Date.now
	},
});

module.exports = mongoose.model("Job", JobSchema);