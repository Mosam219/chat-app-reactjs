import React, { useEffect } from "react";
import { SocketProvider } from "../providers/socketProvider";
import { ConversationProvider } from "../providers/conversationProvider";
import MessageBox from "./messageBox";
import RoomBox from "./roomBox";
import io from "socket.io-client";
import Chatbox from "./chatbox";
import "../styles/app.css";
export default function App() {
  const [socket, setSocket] = React.useState(null);
  useEffect(() => {
    const currSocket = io.connect("http://localhost:4000");
    currSocket.on("connect", () => {
      setSocket(currSocket);
    });

    return () => {
      currSocket.close();
    };
  }, []);
  return (
    <div className="app">
      <SocketProvider socket={socket}>
        <ConversationProvider>
          <Chatbox />
          <MessageBox />
          <RoomBox />
        </ConversationProvider>
      </SocketProvider>
    </div>
  );
  // return <div>Hello</div>;
}
