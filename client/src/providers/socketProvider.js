import React, { useContext, useEffect } from "react";

const socketContext = React.createContext();

export function useSocket() {
  return useContext(socketContext);
}

export function SocketProvider({ socket, children }) {
  return (
    <socketContext.Provider value={socket}>{children}</socketContext.Provider>
  );
}
