import axios from "axios";

import {connectSocket} from "../socket/socketUtils";

const CREATE_CHAT_URL = process.env.REACT_APP_CREATE_CHAT;
const FETCH_CHATS_URL = process.env.REACT_APP_FETCH_CHATS;

const createChat = (user, socket) => {
    axios.post(CREATE_CHAT_URL, {userId: "630faaba201a2bd1c9144081"}, {
        headers: {
            "Authorization": user.token
        }
    }).then(result => {
        let chatId = result.data.data._id;
        connectSocket(socket, chatId);
    }).catch(err => {
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