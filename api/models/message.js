import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    // author: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User"
    // },
    author: String,
    content: String,
    // chat: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Chat"
    // }
}, {
    timestamps: true
});

const Messages = mongoose.model("Message", messageSchema);

export default Messages;