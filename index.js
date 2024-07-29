const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require('mongoose');
const Room = require('./models/room');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middleware setup
const cloudinary = require('cloudinary').v2;
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/profile");
const jobRoutes = require("./routes/Job");
const jobTypeRoutes = require("./routes/jobType");
const applyRoutes = require('./routes/applyRoutes');
const messageRoutes = require('./routes/message');
const employerRoutes = require('./routes/employerRoutes');
const trackingRoute = require('./routes/tracking'); 

const database = require("./config/database");

dotenv.config();
const PORT = process.env.PORT || 4000;

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

// Return "https" URLs by setting secure: true
cloudinary.config({
    secure: true
});

// Log the configuration
console.log(cloudinary.config());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Socket.io setup for private messaging
io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for joining a private room
    socket.on('joinRoom', async ({ roomId }) => {
        socket.join(roomId);
        console.log(`User joined room: ${roomId}`);

        // Retrieve and send past messages for the room
        let room = await Room.findOne({ roomId });
        if (!room) {
            room = new Room({ roomId, messages: [] });
            await room.save();
        }

        socket.emit('loadMessages', room.messages);
    });

    // Listen for private messages
    socket.on('privateMessage', async ({ roomId, sender, message }) => {
        message = message.trim(); // Ensure message is trimmed
        if (message) {
            console.log(`Message received in room ${roomId}: ${message}`);
            
            // Save the message to the database
            const newMessage = { sender, message, timestamp: new Date() };
            await Room.updateOne(
                { roomId },
                { $push: { messages: newMessage } }
            );

            // Emit the message only to the specified room
            io.to(roomId).emit('privateMessage', newMessage);
        } else {
            console.log(`Empty message from ${sender} in room ${roomId}`);
        }
    });

    // Handle disconnections
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

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
app.use('/api/v1/employer', employerRoutes);
app.use('/api', trackingRoute);

// Default route to serve the index.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start the server
server.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
});
