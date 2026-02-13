// client/src/components/BookingForm.js
import React, { useState } from "react";
import API from "../api";

const BookingForm = ({ room, onClose }) => {
  const [form, setForm] = useState({ checkIn: "", checkOut: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/bookings", {
        room: room._id,
        checkIn: form.checkIn,
        checkOut: form.checkOut,
      });
      alert("Room booked successfully!");
      onClose();
    } catch (err) {
      alert("Booking failed. Please log in.");
    }
  };

  return (
    <div
      style={{ border: "1px solid #000", padding: "1rem", marginTop: "1rem" }}
    >
      <h4>Book {room.name}</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Check-In:
          <input type="date" name="checkIn" onChange={handleChange} required />
        </label>
        <br />
        <label>
          Check-Out:
          <input type="date" name="checkOut" onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Confirm Booking</button>
        <button type="button" onClick={onClose} style={{ marginLeft: "1rem" }}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
