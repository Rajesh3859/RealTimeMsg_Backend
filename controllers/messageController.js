const Message = require("../models/messageModel");
const Chat = require("../models/chatModel");

const sendMessage = async (req, res) => {
  const { content, chatId } = req.body;
  if (!content || !chatId) {
    return res
      .status(400)
      .json({ message: "Message and Chat ID are required" });
  }
  try {
    const message = await Message.create({
      sender: req.user._id,
      content,
      chat: chatId,
    });

  
    message = await message.populate("sender", "name email");
    message = await message.populate("chat");

    await Chat.findByIdAndUpdate(chatId, { latestMessage: message._id });
    res.json(message);
  } catch (error) {
    res.status(500).json({ message: "Failed to send message", error });
  }
}

const fetchMessages = async (req, res) => {
  const messages = await Message.find({ chat: req.params.chatId }).populate(
    "sender",
    "name profilePic"
  ).populate("chat");
  res.json(messages);
};

module.exports = { sendMessage, fetchMessages };
