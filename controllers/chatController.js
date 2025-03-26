const Chat = require("../models/chatModel");
const User = require("../models/userModel");

const accessChat = async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  let chat = await Chat.findOne({
    isGroupChat: false,
    users: { $all: [req.user._id, userId] },
  })
    .populate("users", "-password")
    .populate("latestMessage");

  if (!chat) {
    chat = await Chat.create({
      users: [req.user._id, userId],
      isGroupChat: false,
    });
    chat = await chat.populate("users", "-password");
  }

  res.json(chat);
};

const fetchChats = async (req, res) => {
  const chats = await Chat.find({ users: req.user._id })
    .populate("users", "-password")
    .populate("latestMessage")
    .sort({ updatedAt: -1 });

  res.json(chats);
};

module.exports = { accessChat, fetchChats, };
