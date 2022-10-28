import axios from "axios";

import {connectSocket} from "../socket/socketUtils";
import {socket} from "../socket/socketUtils";
import {getRecentMessages} from "../message/utils";

const CREATE_CHAT_URL = process.env.REACT_APP_CREATE_CHAT;
const FETCH_CHATS_URL = process.env.REACT_APP_FETCH_CHATS;

const createChat = (user, chatMember, getChatAction, chatList, setChatList, setMessages) => {
    axios.post(CREATE_CHAT_URL, {userId: chatMember}, {
        headers: {
            "Authorization": user.token
        }
    }).then(result => {
        // let chatId = result.data.data._id;
        // connectSocket(socket, chatId);
        // fetch
        // getRecentMessages(chatId, user, setMessages);

        // update chat list
        let newChatList = [...chatList, result.data.data];
        setChatList(newChatList);

        // get this chat in ui
        getChatAction(user, chatMember, setMessages);
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
        // if there are connected chats - connect to the first one
        // if(chat.users.length > 0) {
        //     getChatAction(user, chat.users[0]._id);
        // }
        // set chat list
        setChatList(result.data);
    }).catch(err => {
        console.log(err);
    })
}

const getChat = async (user, receiver, setMessages) => {
    // console.log(setMessages);
    let chat;
    await axios.get(FETCH_CHATS_URL, {
        params: {
            "userId": receiver
        },
        headers: {
            "Authorization": user.token
        }
    }).then(result => {
        getRecentMessages(result.data[0]._id, user, setMessages);
        connectSocket(socket, result.data[0]._id);
        chat = result.data[0]
        // socket.emit("fetch messages", result.data[0]._id, user);
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
