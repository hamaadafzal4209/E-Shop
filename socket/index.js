import { Server as socketIO } from "socket.io";
import http from "http";
import express from "express";
import cors from "cors";

const app = express();
const server = http.createServer(app);
const io = new socketIO(server);  // Create a new instance of socketIO

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running");
});

server.listen(process.env.PORT || 6000, () => {
  console.log(`Server is running on localhost:${process.env.PORT || 6000}`);
});