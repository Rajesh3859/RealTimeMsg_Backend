const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/admin/data", protect, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Admin-only data accessed!" });
});
router.put(
  "/make-admin/:id",
  protect,
  authorizeRoles("admin"),
  async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.role = "admin";
    await user.save();
    res.json({ message: "User promoted to admin" });
  }
);


module.exports = router;
