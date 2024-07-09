const Profile = require("../models/Profile");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/cloudinary");

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('additionalDetails');
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, profile: user.additionalDetails });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('additionalDetails');
        const { profilePic, gender, contactNumber, currentCity, dateOfBirth, about } = req.body;
        const profile = await Profile.findOneAndUpdate(
            { _id: req.user.additionalDetails },  // Assuming _id is used to identify Profile
            { profilePic, gender, contactNumber, currentCity, dateOfBirth, about },
            { new: true, runValidators: true }
        );
        res.status(200).json({ success: true, profile});
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.updateDisplayPicture = async (req, res) => {
    try {
        const displayPicture = req.files;
        const userId = req.user.id;
        const image = await uploadImageToCloudinary(
            displayPicture,
            process.env.FOLDER_NAME,
            1000,
            1000
        );
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { profilePic: image.secure_url },  
            { new: true }
        );
        res.status(200).json({
            success: true,
            message: "Image updated successfully",
            data: updatedUser,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
