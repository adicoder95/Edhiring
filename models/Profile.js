
const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
	profilePic: {
	  type: String,
	  required: true,
	  default: 'default-profile-pic-url',
	},
	gender: {
	  type: String,
	  required: true,
	  default: 'Not specified',
	},
	contactNumber: {
	  type: Number,
	  required: true,
	  trim: true,
	  default: '0000000000',
	},
	currentCity: {
	  type: String,
	  required: true,
	  default: 'Unknown',
	},
	dateOfBirth: {
	  type: Date,
	  required: true,
	  default: new Date('2000-01-01'),
	},
	about: {
	  type: String,
	  required: true,
	  trim: true,
	  default: 'No details provided',
	},
	personalDetails: {
	  type: {
		profilePic: String,
		full_Name: String,
		gender: {
		  type: String,
		  enum: ['Male', 'Female', 'Other'],
		},
		email: String,
		contact_No: String,
		current_City: String,
		experience: {
		  type: String,
		  enum: ['Fresher', 'Experience'],
		},
		experience_time: Date,
		resume: String, // Assuming the file path or URL will be stored as a string
		job_Role: String,
	  },
	  required: true,
	  default: {
		profilePic: 'default-profile-pic-url',
		full_Name: '',
		gender: 'Not specified',
		email: '',
		contact_No: '0000000000',
		current_City: 'Unknown',
		experience: 'Fresher',
		experience_time: new Date('2000-01-01'),
		resume: '',
		job_Role: '',
	  },
	},
	workExperience: {
	  type: [
		{
		  company: String,
		  designation: String,
		  working: {
			type: String,
			enum: ['yes'],
		  },
		  worked_Since: Date,
		  worked_till: Date,
		  description: String,
		},
	  ],
	  default: [],
	},
	keySkills: {
	  type: {
		tags: [String],
	  },
	  required: true,
	  default: {
		tags: [],
	  },
	},
	education: {
	  type: [
		{
		  degree: String,
		  institute_Name: String,
		  year_of_Starting: Date,
		  year_of_Passing: Date,
		},
	  ],
	  default: [],
	},
	certification: {
	  type: [
		{
		  certificate_Name: String,
		  from_Date: Date,
		  to_Date: Date,
		},
	  ],
	  default: [],
	},
	language: {
	  type: [
		{
		  language: String,
		  proficiency: {
			type: String,
			enum: ['Beginner', 'Intermediate', 'Expert', 'Native', 'Fluent'],
		  },
		},
	  ],
	  default: [],
	},
	hobbies: {
	  type: {
		hobbies: [String],
	  },
	  required: true,
	  default: {
		hobbies: [],
	  },
	},
  });
module.exports = mongoose.model('Candidate', profileSchema);
  
