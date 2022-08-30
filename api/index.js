import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import {Server} from "socket.io";
import axios from "axios";

import Message from "./models/message.js";

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

io.sockets.on("connection", (socket) => {

    axios.get("http://localhost:8080/messages/fetchMessages").then(data => {
        socket.emit("mostRecentMessages", data.data.reverse());
    }).catch(err => {
        console.log(err);
        socket.emit("mostRecentMessages", []);
    })

    socket.on("join chat", (room) => {
        socket.join(room.id);
        io.emit("user joined", "user joined");
    });

    // socket.on("new message", room => {
    //     // if (!newMessage.author) return console.log("There is no such chat");
    //     io.to(room.id).emit("message received", room.message);
    // })

    socket.on("new message",(data) => {
        try {
            const message = new Message(
                {
                    author: "123",
                    content: data.message,
                }
            )
            message.save().then(()=>{
                io.to("1").emit("message received",message);
            }).catch(error => console.log("error: "+error))
        }catch (e) {
            console.log("error: "+e);
        }
    });
});

