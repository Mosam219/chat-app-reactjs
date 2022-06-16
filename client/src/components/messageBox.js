import React, { useRef } from "react";
import { useConversation } from "../providers/conversationProvider";
import "../styles/messageBox.css";
export default function MessageBox() {
  const methods = useConversation();
  const inpMsg = useRef(null);

  const sendMessage = () => {
    var currMsg = inpMsg.current.value;
    methods.addMessage(currMsg, 1);
    methods.sendMessage(currMsg);
  };
  return (
    <div className="messageInp">
      <input placeholder="Enter Message" ref={inpMsg} className="inp" />
      <button onClick={sendMessage} className="btn">
        Send
      </button>
    </div>
  );
}
