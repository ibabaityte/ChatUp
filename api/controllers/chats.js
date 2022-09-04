import Chats from "../models/chat.js";

const fetchChatsConfig = (req) => {
    if(!req.query.userId) {
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
        res.status(400).send({
            message: "Please provide a user id to create a chat"
        });
    }

    Chats.find({
        $and: [
            {users: req.userId},
            {users: userId}]
    }).then(async (result) => {
        if (result.length > 0) {
            res.status(409).send({
                code: "409",
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
                    res.status(200).send({
                        message: "Chat created successfully",
                        data: data
                    });
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).send({
                        message: "Something went wrong during chat creation. Try again."
                    });
                })
        }
    })
}

const fetchChats = async (req, res) => {
    await Chats.find(fetchChatsConfig(req)).populate("users", "-password").sort({updatedAt: -1})
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