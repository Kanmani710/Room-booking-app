// client/src/pages/Bookings.js
import React, { useEffect, useState } from "react";
import API from "../api";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await API.get("/bookings");
        setBookings(res.data);
      } catch (err) {
        alert("Please log in to view bookings.");
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking._id}>
              <strong>{booking.room.name}</strong> <br />
              Check-in: {booking.checkIn} | Check-out: {booking.checkOut}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bookings;
