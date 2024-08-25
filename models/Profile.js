
const mongoose = require("mongoose");
const profileSchema = new mongoose.Schema({
	
	PersonalDetails : {
	  type: {
		Profile_Pic: String,
		Full_Name: String,
		Gender: {
		  type: String,
		  enum: ['Male', 'Female', 'Other'],
		},
		Email: String,
		Contact_No: String,
		Current_City: String,
		Experience: {
		  type: String,
		  enum: ['Fresher', 'Experienced'],
		},
		Experience_time: {
			years:{type:Number,default:0},
			months:{type:Number,default:0},
		},
		ResumeTex: String, 
		ResumePdf: String, 
		Job_Role: String,
	  },
	  required: true,
	  default: {
		Profile_Pic: 'default-profile-pic-url',
		Full_Name: '',
		Gender: 'Not specified',
		Email: '',
		Contact_No: '0000000000',
		Current_City: 'Unknown',
		Experience: 'Fresher',
		ResumeTex: '',
		ResumePdf: '',
		Job_Role: '',
	  },
	},
	WorkExperience : {
	  type: [
		{
		  Company: String,
		  Designation: String,
		  Working: {
			type: String,
			enum: ['yes','no'],
		  },
		  Worked_Since: Date,
		  Worked_till: Date,
		  Description: String,
		},
	  ],
	  default: [],
	},
	KeySkills: {
	  type: {
		tags: [String],
	  },
	  required: true,
	  default: {
		tags: [],
	  },
	},
	Education: {
	  type: [
		{
		  Degree: String,
		  Institute_Name: String,
		  Year_of_Starting: Date,
		  Year_of_Passing: Date,
		},
	  ],
	  default: [],
	},
	Certification: {
	  type: [
		{
		  Certificate_Name: String,
		  From_Date: Date,
		  To_Date: Date,
		},
	  ],
	  default: [],
	},
	Language: {
	  type: [
		{
		  Language: String,
		  Proficiency: {
			type: String,
			enum: ['Beginner', 'Intermediate', 'Expert', 'Native', 'Fluent'],
		  },
		},
	  ],
	  default: [],
	},
	Hobbies: {
	  type: {
		Hobbies: [String],
	  },
	  required: true,
	  default: {
		Hobbies: [],
	  },
	},
  });
module.exports = mongoose.model('Candidate', profileSchema);
  
