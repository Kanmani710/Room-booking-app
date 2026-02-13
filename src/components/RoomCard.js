// client/src/components/RoomCard.js
import React from "react";

const RoomCard = ({ room, onBook }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h3>{room.name}</h3>
      <p>{room.description}</p>
      <p>
        <strong>Price:</strong> ₹{room.price} / night
      </p>
      <button onClick={() => onBook(room)}>Book Now</button>
    </div>
  );
};

export default RoomCard;
