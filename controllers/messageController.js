const Message = require("../models/messageModel");
const Chat = require("../models/chatModel");

const sendMessage = async (req, res) => {
  const { content, chatId } = req.body;
  if (!content || !chatId) {
    return res
      .status(400)
      .json({ message: "Message and Chat ID are required" });
  }

  const message = await Message.create({
    sender: req.user._id,
    content,
    chat: chatId,
  });

  await Chat.findByIdAndUpdate(chatId, { latestMessage: message._id });

  res.json(message);
};

const fetchMessages = async (req, res) => {
  const messages = await Message.find({ chat: req.params.chatId }).populate(
    "sender",
    "name profilePic"
  );
  res.json(messages);
};

module.exports = { sendMessage, fetchMessages };
