const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  sendMessage,
  fetchMessages,
} = require("../controllers/messageController");

const router = express.Router();

router.post("/", protect, sendMessage);
router.get("/:chatId", protect, fetchMessages);

module.exports = router;
