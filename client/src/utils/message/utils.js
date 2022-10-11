import {socket} from "../socket/socketUtils";

const sendMessage = (e, setMessage, message, chat, authorId) => {
    e.preventDefault();
    socket.emit("new message", {chatId: chat._id, authorId, message});
    setTimeout(() => {
        let msgList = document.getElementById("message-list");
        msgList.scrollTop = msgList.scrollHeight;
    }, 250);
    setMessage("");
}

export {sendMessage}
