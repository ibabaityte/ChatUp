import axios from "axios";
import Message from "../models/message.js";

const getRecentMessages = (socket, id) => {
    axios.get("http://localhost:8080/messages/fetchMessages", {params: {chatId: id}}).then(data => {
        socket.emit("mostRecentMessages", data.data.reverse());
    }).catch(err => {
        console.log(err);
        socket.emit("mostRecentMessages", []);
    })
}

const joinChat = (room, socket, io) => {
    if(room === undefined) {
        return null;
        // will handle later when front error handling is implemented
    } else {
        socket.join(room.id);
        io.emit("user joined", "user joined");
    }
}

const newMessage = async (data, io) => {
    const {chatId, authorId, message} = data;
    if(!message || message === "") {
        // will handle later when front error handling is implemented
    }
        const newMessage = new Message(
            {
                author: authorId,
                chat: chatId,
                content: message,
            }
        )
        await newMessage.populate("author");
        newMessage.save().then(()=>{
            io.to(chatId).emit("message received", newMessage);
        }).catch(error => console.log(error));
}

export {getRecentMessages, joinChat, newMessage}