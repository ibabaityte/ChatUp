import {socket} from "../socket/socketUtils";

const sendMessage = (e, setMessage, message, chat, authorId) => {
    e.preventDefault();
    socket.emit("new message", {chatId: chat._id, authorId, message});
    setMessage("");
}

export {sendMessage}
