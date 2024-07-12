const mongoose = require("mongoose");

const employerProfileSchema = new mongoose.Schema({
    logo: {
        type: String,
        required: true,
        default: 'default-logo-pic-url',
    },
    coverPhoto: {
        type: String,
        required: true,
        default: 'default-coverPhoto-pic-url',
    },
    email:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    contact: {
        type: Number,
        trim: true,
    },
    instituteName: {
        type: String,
        required: true,
        default: 'Not specified',
    },
    institueContact: {
        type: Number,
        trim: true,
    },
    instituteEmail:{
        type: String,
        required: true
    },
    website:{
        type: String,
        required: true
    },
    foundingDate: {
        type: Date,
        default: Date.now,
    },
    socialNetwork:{
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true,
        trim: true,
        default: 'No details provided',
    },
    currentCity:{
        type: String,
        required: true,
        default: 'Unknown',
    },
    pincode:{
        type:Number,
        required:true
    },
    address1:{
        type: String,
    },
    address2:{
        type: String,
    },
    address3:{
        type: String,
    },
    fullName: {
        type: String,
        required: true
    }
});

// Pre-save hook to populate fullName from associated User model
employerProfileSchema.pre('save', async function(next) {
    if (this.email) {
        const user = await mongoose.model('User').findById(this.email);
        this.fullName = `${user.firstName} ${user.lastName}`;
    }
    next();
});

// Export the Profile model
module.exports = mongoose.model("EmployerProfile", employerProfileSchema);
