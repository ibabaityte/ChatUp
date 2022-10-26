import axios from "axios";

import {connectSocket} from "../socket/socketUtils";
import {socket} from "../socket/socketUtils";

const CREATE_CHAT_URL = process.env.REACT_APP_CREATE_CHAT;
const FETCH_CHATS_URL = process.env.REACT_APP_FETCH_CHATS;

const createChat = (user, chatMember, getChatAction, chatList, setChatList) => {
    axios.post(CREATE_CHAT_URL, {userId: chatMember}, {
        headers: {
            "Authorization": user.token
        }
    }).then(result => {
        let chatId = result.data.data._id;
        connectSocket(socket, chatId);

        let newChatList = [...chatList, result.data.data];
        setChatList(newChatList);
        getChatAction(user, chatMember);
    }).catch(err => {
        console.log(err);
    })
}

const fetchChats = (user, chat, getChatAction, chatList, setChatList) => {
    axios.get(FETCH_CHATS_URL, {
        headers: {
            "Authorization": user.token
        }
    }).then(result => {
        // console.log(result.data[0].users[1]._id);
        if(chat.users === undefined) {
            getChatAction(user, result.data[0].users[1]._id);
        } else {
            getChatAction(user, chat.users[1]._id);
        }
        setChatList(result.data);
    }).catch(err => {
        console.log(err);
    })
}

const getChat = async (user, receiver) => {
    let chat;
    await axios.get(FETCH_CHATS_URL, {
        params: {
            "userId": receiver
        },
        headers: {
            "Authorization": user.token
        }
    }).then(result => {
        connectSocket(socket, result.data[0]._id);
        socket.emit("fetch messages", result.data[0]._id);
        chat = result.data[0]
    }).catch(err => {
        console.log(err);
        chat = err;
    });
    return chat;
}

export {
    createChat,
    fetchChats,
    getChat
}
