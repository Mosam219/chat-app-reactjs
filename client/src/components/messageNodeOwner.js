import React from "react";

export default function MessageNodeOwner({ msg }) {
  return (
    <div className="parentOwner">
      <div className="messageNodeOwner">{msg}</div>
    </div>
  );
}
