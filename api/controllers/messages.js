import Message from "../models/message.js";

const fetchMessages = (req, res) => {
    Message.find({chat: req.query.chatId}).populate("author").populate("author", "-password").sort({_id: -1}).limit(10)
        .then(data => {
            res.status(200).send(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({
                message: "Something went wrong while fetching your messages. Try again."
            });
        })
}

export default {fetchMessages}