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

real-time-chat-backend/ 
├── config/ 
│ └── db.js 
// MongoDB connection 
├── controllers/ │ 
├── userController.js 
│ ├── chatController.js 
│ └── messageController.js 
├── middleware/ 
│ ├── authMiddleware.js 
// JWT & Role authorization 
├── models/ 
│ ├── User.js 
│ ├── Chat.js 
│ └── Message.js 
├── routes/ 
│ ├── userRoutes.js 
│ ├── chatRoutes.js 
│ └── messageRoutes.js 
├── .env 
├── server.js 
// Main entry point 
└── package.json
