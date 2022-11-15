const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
let { io } = require("socket.io-client");

const app = express();
const httpServer = createServer(app);

io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
  credentials: true,
});

io.on("connection", (socket) => {
  //   console.log("hi");
  //   socket.emit("hello from server");
  //   socket.on("hello from client", () => {
  //     console.log("hello");
  //   });
  socket.on("connectCall", (data, name) => {
    console.log("abduldata", data, name);
    socket.broadcast.emit("calling", data, name);
  });
});

httpServer.listen(4000, () => {
  console.log("serverStarted");
});
