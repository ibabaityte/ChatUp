import Chats from "../models/chat.js";

const createChat = async (req, res) => {
    const {userId} = req.body;

    if (!userId) {
        res.send({
            message: "Please provide a user id to create a chat"
        });
    }

    Chats.find({
        $and: [
            {users: req.userId},
            {users: userId}]
    }).then(async (result) => {
        if (result.length > 0) {
            res.send({
                code: "409",
                message: "A chat with these users already exists. Try again."
            });
        } else {
            const chatData = {
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
                    console.log(err);
                    res.send({
                        message: "Something went wrong during chat creation. Try again."
                    });
                })
        }
    })
}

const fetchChats = async (req, res) => {
    await Chats.find({
        $and: [
            {users: req.userId},
            {users: req.query.userId}
        ]
    }).populate("users", "-password").sort({updatedAt: -1})
        .then(async result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
            res.send({
                message: "Something went wrong while fetching chats. Try again."
            });
        })
}


export default {createChat, fetchChats};