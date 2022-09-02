import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
    // latestMessage: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Message"
    // }
});

const Chats = mongoose.model("Chat", chatSchema);

export default Chats;