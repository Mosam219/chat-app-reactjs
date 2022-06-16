import React from "react";
import "../styles/roomBox.css";
export default function RoomBox() {
  return (
    <div className="roomInp">
      <input placeholder="Enter RoomCode" className="inp" />
      <button className="btn">Join</button>
    </div>
  );
}
