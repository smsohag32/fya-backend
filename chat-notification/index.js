const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const conversationMap = new Map(); 

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);

    const roomConversation = conversationMap.get(data) || [];
    socket.emit("previous_conversation", roomConversation);
  });

  socket.on("get_conversation", (room) => {
    const roomConversation = conversationMap.get(room) || [];
    socket.emit("previous_conversation", roomConversation);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);

    if (!conversationMap.has(data.room)) {
      conversationMap.set(data.room, []);
    }
    conversationMap.get(data.room).push(data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(process.env.PORT || 3001, () => {
  console.log("SERVER RUNNING for chat app by socket io");
});

