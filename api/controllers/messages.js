import Message from "../models/message.js";
// import Chats from "../models/chat.js";
// import User from "../models/user.js";

const sendMessage = async (req, res) => {
    const {content, chatId} = req.body;
    // const {content} = req.body;

    // if (!content || !chatId) {
    //     res.send({
    //         message: "Invalid data passed into request. Try again"
    //     })
    // }

    if (!content) {
        res.send({
            message: "Invalid data passed into request. Try again"
        })
    }

    let newMessage = new Message({
        author: req.userId,
        content,
        chat: chatId
    })

    newMessage.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err);
        })
}

const fetchMessages = (req, res) => {
    Message.find({chat: req.query.chatId}).populate("author").populate("author", "-password").sort({_id: -1}).limit(10)
        .then(data => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        })
}

export default {sendMessage, fetchMessages}