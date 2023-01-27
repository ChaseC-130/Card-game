import RightBanner from "./Components/Game/Banner/RightBanner";
import Board from "./Components/Game/Board/Board";
import socketio from "socket.io-client";
import * as React from 'react';

export const socket = socketio.connect("localhost:3000");
export const SocketContext = React.createContext();

function App() {
  return (
    <>
    <SocketContext.Provider value={socket}>
    <Board />
    </SocketContext.Provider>
    </>
  );
}

export default App;
