const mongoose = require("mongoose");

// Define the Profile schema
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
	currentCity:{
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
	
});

// Export the Profile model
module.exports = mongoose.model("Candidate", profileSchema);
