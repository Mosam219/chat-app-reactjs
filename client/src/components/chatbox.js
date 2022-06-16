import React, { useCallback, useRef } from "react";
import { useConversation } from "../providers/conversationProvider";
import "../styles/chatbox.css";
import MessageNode from "./messageNode.js";
import MessageNodeOwner from "./messageNodeOwner";
export default function Chatbox() {
  var methods = useConversation();
  const lastMsg = useRef();
  const setRef = useCallback((node) => {
    if (node) node.scrollIntoView({ smooth: true });
  });
  return (
    <div className="chatBox">
      {methods.chatMessages.map((msg) => {
        return (
          <div className="" ref={lastMsg ? setRef : null}>
            {msg.owner == 1 ? (
              <MessageNodeOwner msg={msg.msg} />
            ) : (
              <MessageNode msg={msg.msg} />
            )}
            <br />
          </div>
        );
      })}
    </div>
  );
}
