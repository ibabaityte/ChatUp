import Chats from "../models/chat.js";
import Messages from "../models/message.js";

// we fetch chats in two cases: when page loads (we fetch all chats) or when we try to c
const fetchChatsConfig = (req) => {
    if (!req.query.userId) {
        return {users: req.userId};
    } else {
        return {
            $and: [
                {users: req.userId},
                {users: req.query.userId}
            ]
        }
    }
}

const createChat = async (req, res) => {
    const {userId} = req.body;

    if (!userId) {
        return res.status(400).send({
            message: "Please provide a user id to create a chat"
        });
    }

    Chats.find({
        $and: [
            {users: req.userId},
            {users: userId}]
    }).then(async (result) => {
        if (result.length > 0) {
            return res.status(409).send({
                message: "A chat with these users already exists. Try again."
            });
        } else {
            const chatData = {
                users: [req.userId, userId]
            }

            const newChat = await new Chats(chatData).populate({
                path: 'users'
            });

            newChat.save()
                .then(data => {
                    return res.status(200).send({
                        message: "chat created successfully",
                        data: data
                    });
                })
                .catch(err => {
                    console.log(err);
                    return res.status(500).send({
                        message: "Something went wrong during chat creation. Try again."
                    });
                })
        }
    })
}

const fetchChats = async (req, res) => {
    await Chats.find(fetchChatsConfig(req)).populate("users", "-password").sort({updatedAt: -1})
        .then(async result => {
            return res.status(200).send(result);
        })
        .catch(err => {
            console.log(err);
            return res.status(500).send({
                message: "Something went wrong while fetching chats. Try again."
            });
        })
}

const deleteChat = async (req, res) => {
    let chatId = req.query.chatId;
    await Chats.findByIdAndRemove(chatId).then(() => {
        Messages.deleteMany({chat: chatId})
            .then(result => {
                // console.log(result);
                return res.status(200).send({
                    message: "Messages successfully deleted"
                });

            })
            .catch(err => {
                console.log(err);
                return res.status(500).send({
                    message: "Could not delete messages. Try again."
                });
            })
    }).catch(err => {
        console.log(err);
        if (err.kind === "ObjectId" || err.name === "NotFound") {
            return res.status(404).send({
                message: "Chat not found"
            });
        }
        return res.status(500).send({
            message: "Could not delete this chat. Try again."
        });
    });
}

export default {createChat, fetchChats, deleteChat};
