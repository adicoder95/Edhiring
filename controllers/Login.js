const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Signup = require('../controllers/Signup');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(403).json({
                success: false,
                message: "All Fields are required",
            });
        }

        const user = await Signup.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User does not exist. Please sign up.",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials.",
            });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            success: true,
            token,
            user,
            message: "User logged in successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be logged in. Please try again.",
        });
    }
};
