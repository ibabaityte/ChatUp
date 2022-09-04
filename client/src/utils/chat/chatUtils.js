import axios from "axios";

import {connectSocket} from "../socket/socketUtils";

const CREATE_CHAT_URL = process.env.REACT_APP_CREATE_CHAT;
const FETCH_CHATS_URL = process.env.REACT_APP_FETCH_CHATS;

const createChat = (user, socket, chatMember, setChat,  chatList, setChatList) => {
    axios.post(CREATE_CHAT_URL, {userId: chatMember}, {
        headers: {
            "Authorization": user.token
        }
    }).then(result => {
        let chatId = result.data.data._id;
        connectSocket(socket, chatId);
        fetchChats(user, setChat, socket, chatMember, chatList, setChatList)
    }).catch(err => {
        console.log(err);
    })
}

const fetchChats = (user, setChat, socket, receiver = "",  chatList, setChatList) => {
    axios.get(FETCH_CHATS_URL, {
        params: {
            "userId": receiver
        },
        headers: {
            "Authorization": user.token
        }
    }).then(result => {
        if(result.data.length === 1) {
            setChat(result.data[0]);
            connectSocket(socket, result.data[0]._id);
            socket.emit("fetch messages", result.data[0]._id);
            let newChatList = [...chatList];
            newChatList.push(result.data[0]);
            setChatList(newChatList);
        } else {
            setChatList(result.data);
        }
    }).catch(err => {
        console.log(err);
    })
}

export {createChat, fetchChats}