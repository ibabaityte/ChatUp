import io from "socket.io-client";
import {fetchChats} from "../chat/chatUtils";
const endpoint = process.env.REACT_APP_API_ENDPOINT;

const connectSocket = (socket, chatId) => {
    socket.emit("join chat", {id: chatId});
}

const messageReceivedSocket = (message, messages, setMessages) => {
    try {
        // if(messages !== []) {
            const newMessages = [...messages, message];
            setMessages(newMessages);
        // }
    } catch (err) {
        console.log(err);
    }
}

const chatDeletedSocket = (user, chatList, setChatList, getChatAction, setMessages) => {
    if(chatList.length === 1 || chatList.length < 1) {
        getChatAction(user, null, setMessages);
    } else {
        getChatAction(user, chatList[0].users[0]._id, setMessages);
    }
    fetchChats(user, chatList, setChatList);
}

const friendTypingSocket = (setFriendTyping) => {
    setFriendTyping(true);
    let msgList = document.getElementById("message-list");
    msgList.scrollTop = msgList.scrollHeight;
    // setTimeout(() => {
    //     setFriendTyping(false);
    // }, 2000);
}

const friendNotTypingSocket = (setFriendTyping) => {
    setFriendTyping(false);
    let msgList = document.getElementById("message-list");
    msgList.scrollTop = msgList.scrollHeight;
    // setTimeout(() => {
    //     setFriendTyping(false);
    // }, 2000);
}


export const socket = io.connect(endpoint);

export {
    connectSocket,
    messageReceivedSocket,
    chatDeletedSocket,
    friendTypingSocket,
    friendNotTypingSocket
}
