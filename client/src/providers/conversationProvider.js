import React, { useContext, useEffect } from "react";
import { useSocket } from "./socketProvider";
const ConversationContext = React.createContext();
export function useConversation() {
  return useContext(ConversationContext);
}
export function ConversationProvider({ children }) {
  const [chatMessages, setChatMessages] = React.useState([]);
  const socket = useSocket();
  const addMessage = (msg, owner) => {
    setChatMessages((chatMessages) => [
      ...chatMessages,
      { msg: msg, owner: owner },
    ]);
  };
  const sendMessage = (msg) => {
    socket.emit("send-message", msg);
  };
  const value = {
    chatMessages: chatMessages,
    addMessage: addMessage,
    sendMessage: sendMessage,
  };
  useEffect(() => {
    if (socket == null) return;
    socket.on("receive-message", (msg) => {
      console.log(chatMessages);
      addMessage(msg, 0);
    });
    // return () => socket.off("receive-message");
  }, [socket]);
  return (
    <ConversationContext.Provider value={value}>
      {children}
    </ConversationContext.Provider>
  );
}
