// server/routes/bookingRoutes.js
const express = require("express");
const router = express.Router();
const {
  bookRoom,
  getBookingsByUser,
} = require("../controllers/bookingController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/", verifyToken, bookRoom); // POST /api/bookings
router.get("/my", verifyToken, getBookingsByUser); // GET /api/bookings/my

module.exports = router;
