const mongoose = require("mongoose");

// Define the Profile schema
const profileSchema = new mongoose.Schema({
	profilePic: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
	contactNumber: {
		type: Number,
		required: true,
		trim: true,
	},
	currentCity:{
		type: String,
		required: true,
	},
	dateOfBirth: {
		type: Date,
		required: true,
	},
	about: {
		type: String,
		required: true,
		trim: true,
	},
	
});

// Export the Profile model
module.exports = mongoose.model("Profile", profileSchema);
