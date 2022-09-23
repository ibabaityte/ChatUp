import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import {Server} from "socket.io";

import {getRecentMessages, joinChat, newMessage} from "./utils/socketUtils.js";

import UserRoutes from "./routes/users.js"
import ChatRoutes from "./routes/chats.js"
import MessageRoutes from "./routes/messages.js"

const api = express();
const port = process.env.PORT;
const dbUrl = process.env.DB_URL;

dotenv.config();

api.use(bodyParser.urlencoded({extended: true}));
api.use(bodyParser.json());
api.use(cors());
api.use(express.json());

api.use(UserRoutes);
api.use(ChatRoutes);
api.use(MessageRoutes);

mongoose.connect(`mongodb://127.0.0.1:27017/${dbUrl}`, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully connected to database");
    }
});

const server = api.listen(port, () => {
    console.log("Server listening on port " + port);
});

const io = new Server(server, {
    pingTimeout: 6000,
    cors: {
        origin: "http://localhost:3000"
    }
});

io.sockets.on("connect", (socket) => {
    socket.on("fetch messages", (chatId) => getRecentMessages(socket, chatId));
    socket.on("join chat", (room) => joinChat(room, socket, io));
    socket.on("new message", (data) => newMessage(data, io));
});

