// client/src/pages/Home.js
import React, { useEffect, useState } from "react";
import API from "../api";
import RoomCard from "../components/RoomCard";
import BookingForm from "../components/BookingForm";

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const res = await API.get("/rooms");
      setRooms(res.data);
    };
    fetchRooms();
  }, []);

  return (
    <div>
      <h2>Available Rooms</h2>
      {rooms.map((room) => (
        <RoomCard key={room._id} room={room} onBook={setSelectedRoom} />
      ))}

      {selectedRoom && (
        <BookingForm
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
        />
      )}
    </div>
  );
};

export default Home;
