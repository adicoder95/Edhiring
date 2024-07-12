const express = require("express");
const app = express();

const bodyParser = require('body-parser');

const userRoutes = require("./routes/user");
const profileRoutes = require("./routes/profile");
const jobRoutes = require("./routes/Job");
const jobTypeRoutes = require("./routes/jobType");

const applyRoutes = require('./routes/applyRoutes');

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 3000;

const User = require('./models/User');
const JobType = require('./models/jobType');

// Database connect
database.connect();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000", // Frontend
    credentials: true,
}));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
}));

// Mount routes
app.use('/api/v1', applyRoutes); 
app.use('/api/v1/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        message: err.message,
    });
});

// Routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api", jobRoutes);
app.use("/api", jobTypeRoutes);

// Default route
app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: 'Your server is up and running....'
    });
});

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
});
