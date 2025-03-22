# RealTimeMsg_Backend


# 💬 Real-Time Chat App – Backend

A full-stack **Real-Time Chat Application** backend built with **Node.js, Express.js, MongoDB**, and **Socket.io**.  
This backend handles authentication, user management, chat creation, real-time messaging, and more.

---

## 🚀 Features

- ✅ JWT Authentication (Login/Register)
- ✅ Role-based Authorization (Admin/User)
- ✅ Real-Time Messaging using **Socket.io**
- ✅ REST APIs for Users, Chats, and Messages
- ✅ File Upload Support (Multer or Firebase)
- ✅ Email Notifications (Nodemailer)
- ✅ Light/Dark Mode Support (Frontend)
- ✅ Clean Modular Code Structure
- ✅ MongoDB Atlas Integration
- ✅ Deployment-Ready (Render/Vercel/Netlify)

---

## 📁 Folder Structure

```
real-time-chat-backend/
├── config/
│   └── db.js                // MongoDB connection
├── controllers/
│   ├── userController.js
│   ├── chatController.js
│   └── messageController.js
├── middleware/
│   ├── authMiddleware.js   // JWT & Role authorization
├── models/
│   ├── User.js
│   ├── Chat.js
│   └── Message.js
├── routes/
│   ├── userRoutes.js
│   ├── chatRoutes.js
│   └── messageRoutes.js
├── .env
├── package.json               // Main entry point
└── server.js 
```

---

## ⚙️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/Rajesh3859/real-time-chat-backend.git

cd real-time-chat-backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup `.env` file**
```env

PORT=3000
MONGO_URI="mongodb+srv://Realtime_M:hhMjPPJrTn0hxEm5@weddingcluster.ldwao.mongodb.net/?retryWrites=true&w=majority&appName=WeddingCluster"
JWT_SECRET="HERO_TIME"
```

4. **Run the server**
```bash
npm start
```

---

## 📡 Socket.io Setup (Realtime Chat)

The server uses **Socket.io** for real-time communication:
- `joinChat` — Join a specific chat room
- `sendMessage` — Emit message to chat room
- `receiveMessage` — Listen for incoming messages

```js
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("joinChat", (chatId) => {
    socket.join(chatId);
  });

  socket.on("sendMessage", (messageData) => {
    io.to(messageData.chatId).emit("receiveMessage", messageData);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});
```

---

## 🛠 API Endpoints

| Method | Endpoint               | Description              |
|--------|------------------------|--------------------------|
| POST   | `/api/user/register`   | Register a new user      |
| POST   | `/api/user/login`      | Login user & get token   |
| GET    | `/api/chat`            | Get all user chats       |
| POST   | `/api/chat`            | Create a new chat        |
| POST   | `/api/message`         | Send a new message       |
| GET    | `/api/message/:chatId` | Get messages of a chat   |

---

## 📦 Tech Stack

- **Node.js** + **Express.js**
- **MongoDB Atlas + Mongoose**
- **JWT (Authentication)**
- **Socket.io**
- **Nodemailer**
- **Multer / Firebase**
- **CORS, Dotenv, etc.**

---

## 🌐 Deployment

You can deploy the backend easily on platforms like:
- [Render](https://realtimemsg-backend.onrender.com)

---

## 👨‍💻 Author

Developed by **Rajesh**  
📧 rajeshvjm10@gmail.com  
💼 [LinkedIn](https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile)| 🐙 [GitHub](https://github.com/Rajesh3859)

---

## 📜 License

This project is licensed under the **MIT License**.
