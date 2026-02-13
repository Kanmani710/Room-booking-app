// server/routes/roomRoutes.js
const express = require("express");
const router = express.Router();
const { getAllRooms } = require("../controllers/roomController");

router.get("/", getAllRooms); // GET /api/rooms

module.exports = router;
