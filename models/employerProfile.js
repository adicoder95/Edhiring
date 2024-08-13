const mongoose = require("mongoose");

const employerProfileSchema = new mongoose.Schema({
    logo: {
        type: String,
        // required: true,
        default: '',
    },      
    coverPhoto: {
        type: String,
        // required: true,
        default: 'default-coverPhoto-pic-url',
    },
    email:{
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        // ref: 'User', 
        // required: true
    },
    contact: {
        type: Number,
        // required: true,
        // trim: true,
    },
    instituteType: {
        type: String,
        default:'Not specified',
    },
    instituteName: {
        type: String,
        // required: true,
        default: 'Not specified',
    },
    institueContact: {
        type: Number,
        trim: true,
        // required: true
    },
    instituteEmail:{
        type: String,
        // required: true
    },
    website:{
        type: String,
        // required: true
    },
    foundingDate: {
        type: Date,
        // required: true,
        default: Date.now,
    },
    socialNetwork:{
        type: String,
        // required: true
    },
    about: {
        type: String,
        // required: true,
        trim: true,
        default: 'No details provided',
    },
    currentCity:{
        type: String,
        // required: true,
        default: 'Unknown',
    },
    pincode:{
        type:Number,
        // required:true
    },
    address1:{
        type: String,
        // required: true
    },
    address2:{
        type: String,
    },
    address3:{
        type: String,
    },
    fullName: {
        type: String,
        // required: true
    },
    rating:{
        type: String,
        default: 'No details provided',
    },
    moreReviews:{
        type:String,
        default: 'No details provided',
    }
});

// Pre-save hook to populate fullName from associated User model
employerProfileSchema.pre('save', async function(next) {
    if (this.email) {
        const user = await mongoose.model('User').findOne({email:this.email});
        // this.fullName = `${user.firstName} ${user.lastName}`;
    }
    next();
});

// Export the Profile model
module.exports = mongoose.model("Employer", employerProfileSchema);
