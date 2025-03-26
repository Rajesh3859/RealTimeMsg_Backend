const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

// Create HTTP server
const server = http.createServer(app);

// Setup Socket.io
const io = require("socket.io")(server, {
  cors: { origin: "*" },
});

// Socket.io Events
io.on("connection", (socket) => {
  console.log("New user connected: " + socket.id);

  socket.on("joinChat", (chatId) => {
    socket.join(chatId);
    console.log(`User ${socket.id} joined chat ${chatId}`);
  });

  socket.on("sendMessage", (messageData) => {
    io.to(messageData.chatId).emit("receiveMessage", messageData);
    console.log(`Message sent to chat ${messageData.chatId}`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected: " + socket.id);
  });
});

// Start the server via HTTP server (NOT app.listen)
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
