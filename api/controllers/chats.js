import Chats from "../models/chat.js";
import User from "../models/user.js";

const createChat = async (req, res) => {
    const {userId} = req.body;

    if (!userId) {
        res.send({
            message: "Please provide a user id to create a chat"
        });
    }

    let isChat = await Chats.find({
        $and: [
            {users: req.userId},
            {users: userId}
        ]
    }).populate("users", "-password").populate("latestMessage");

    isChat = await User.populate(isChat, {
        path: "latestMessage.author",
        select: "name picture email"
    })

    if (isChat.length > 0) {
        res.send(isChat[0]);
    } else {
        let chatData = {
            users: [req.userId, userId]
        }

        const newChat = await new Chats(chatData).populate("users", "-password");
        newChat.save()
            .then(data => {
                res.send({
                    message: "Chat created successfully",
                    data: data
                });
            })
            .catch(err => {
                res.send({
                    message: "Something went wrong during chat creation. Try again."
                });
            })
    }
}

const fetchChats = async (req, res) => {
    await Chats.find({users: req.userId}).populate("users", "-password").populate("latestMessage").sort({updatedAt: -1})
        .then(async data => {
            data = await User.populate(data, {
                path: "latestMessage.author",
                select: "name picture email"
            })
            res.send(data);
        })
        .catch(err => {
            res.send({
                message: "Something went wrong while fetching chats. Try again."
            });
        })
}


export default {createChat, fetchChats};