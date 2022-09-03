import axios from "axios";

import {connectSocket} from "../socket/socketUtils";

const CREATE_CHAT_URL = process.env.REACT_APP_CREATE_CHAT;
const FETCH_CHATS_URL = process.env.REACT_APP_FETCH_CHATS;

const createChat = (user, socket, chatMember, setChat) => {
    axios.post(CREATE_CHAT_URL, {userId: chatMember}, {
        headers: {
            "Authorization": user.token
        }
    }).then(result => {
        let chatId = result.data.data._id;
        connectSocket(socket, chatId);
        fetchChat(user, setChat, socket, chatMember)
    }).catch(err => {
        fetchChat(user, setChat, socket, chatMember)
        console.log(err);
    })
}

const fetchChat = (user, setChat, socket, receiver) => {
    axios.get(FETCH_CHATS_URL, {
        params: {
            "userId": receiver
        },
        headers: {
            "Authorization": user.token
        }
    }).then(result => {
        setChat(result.data[0]);
        connectSocket(socket, result.data[0]._id);
        socket.emit("fetch messages", result.data[0]._id);
    }).catch(err => {
        console.log(err);
    })
}

export {createChat, fetchChat}