const io = require("socket.io")(4000, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("send-message", (msg) => {
    console.log(msg);
    socket.broadcast.emit("receive-message", msg);
  });
});
