// server/models/Room.js
const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  maxPeople: {
    type: Number,
    required: true,
  },
  image: String, // URL to room image
});

module.exports = mongoose.model("Room", roomSchema);
