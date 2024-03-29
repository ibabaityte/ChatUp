import Message from "../models/message.js";
import {io} from "../index.js";

const fetchMessages = (req, res) => {
    Message.find({chat: req.query.chatId}).populate("author").populate("author", "-password").sort({_id: -1}).limit(10)
        .then(data => {
            return res.status(200).send(data);
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).send({
                message: "Something went wrong while fetching your messages. Try again."
            });
        })
}

const createMessage = async (req, res) => {
    const {message, chat, userId} = req.body;

    if(!message || message === "") {
        return res.status(400).send({
            message: "A message can't be empty. Please type something in and hit send."
        })
    } else {
        const newMessage = new Message(
            {
                author: userId,
                chat: chat._id,
                content: message,
            }
        )
        await newMessage.populate("author");
        newMessage.save().then(() => {
            io.to(chat._id).emit("message received", newMessage);
            return res.status(200).send({
                message: "Message sent successfully"
            });
        }).catch(error => console.log(error));
    }
}

export default {fetchMessages, createMessage}
