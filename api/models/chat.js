import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
});

const Chats = mongoose.model("Chat", chatSchema);

export default Chats;