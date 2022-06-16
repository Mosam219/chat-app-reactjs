import React from "react";

export default function MessageNode({ msg }) {
  return (
    <div className="parent">
      <div className="messageNode">{msg}</div>
    </div>
  );
}
