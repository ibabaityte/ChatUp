import axios from "axios";
import Message from "../models/message.js";

const getRecentMessages = (socket) => {
    axios.get("http://localhost:8080/messages/fetchMessages").then(data => {
        socket.emit("mostRecentMessages", data.data.reverse());
    }).catch(err => {
        console.log(err);
        socket.emit("mostRecentMessages", []);
    })
}

const joinChat = (room, socket, io) => {
    if(room === undefined) {
        return null;
    } else {
        socket.join(room.id);
        io.emit("user joined", "user joined");
    }
}

const newMessage = (data, io) => {
    try {
        const message = new Message(
            {
                author: "123",
                content: data.message,
            }
        )
        message.save().then(()=>{
            io.to("1").emit("message received", message);
        }).catch(error => console.log("error: "+error))
    } catch (error) {
        console.log("error: " + error);
    }
}

export {getRecentMessages, joinChat, newMessage}