// server/controllers/bookingController.js
const Booking = require("../models/Booking");

// POST /api/bookings
exports.bookRoom = async (req, res) => {
  const { room, dateFrom, dateTo } = req.body;
  const userId = req.userId;

  try {
    const newBooking = new Booking({
      user: userId,
      room,
      dateFrom,
      dateTo,
    });

    await newBooking.save();
    res.status(201).json({ message: "Room booked successfully" });
  } catch (err) {
    res.status(500).json({ message: "Booking failed" });
  }
};

// GET /api/bookings/my
exports.getBookingsByUser = async (req, res) => {
  const userId = req.userId;

  try {
    const bookings = await Booking.find({ user: userId }).populate("room");
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Could not fetch your bookings" });
  }
};
