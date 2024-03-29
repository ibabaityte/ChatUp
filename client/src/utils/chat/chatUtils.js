import axios from "axios";

import {connectSocket} from "../socket/socketUtils";
import {socket} from "../socket/socketUtils";
import {getRecentMessages} from "../message/utils";

const CHAT_ENDPOINT = process.env.REACT_APP_CHAT_ENDPOINT;

const createChat = (user, chatMember, getChatAction, chatList, setChatList, setMessages) => {
    axios.post(`${CHAT_ENDPOINT}/createChat`, {userId: chatMember}, {
        headers: {
            "Authorization": user.token
        }
    }).then(result => {
        // update chat list
        let newChatList = [...chatList, result.data.data];
        setChatList(newChatList);

        // get this chat in ui
        getChatAction(user, chatMember, setMessages);
    }).catch(err => {
        console.log(err);
    })
}

const fetchChats = (user, chatList, setChatList) => {
    axios.get(`${CHAT_ENDPOINT}/fetchChats`, {
        headers: {
            "Authorization": user.token
        }
    }).then(result => {
        // set chat list
        setChatList(result.data);
    }).catch(err => {
        console.log(err);
    })
}

const getChat = async (user, receiver, setMessages) => {
    let chat;
    await axios.get(`${CHAT_ENDPOINT}/fetchChats`, {
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
    }).catch(err => {
        console.log(err);
        // chat = err;
    });
    return chat;
}

const deleteChat = (chatId, user, getChatAction, chatList, setChatList, setMessages, socket) => {
    axios.delete(`${CHAT_ENDPOINT}/deleteChat`, {
        params: {chatId},
        headers: {
            "Authorization": user.token
        }
    }).then(result => {
        // console.log(result);
        fetchChats(user, chatList, setChatList, setMessages);
        getRecentMessages(chatId, user, setMessages);

        // every time we delete a chat, we load the first one to ui
        // or if that's the last chat then we set the chat to null
        if(chatList.length === 1 || chatList.length < 1) {
            getChatAction(user, null, setMessages);
        } else {
            getChatAction(user, chatList[0].users[0]._id, setMessages);
        }

        socket.emit("chat deleted", {chatId});
    }).catch(err => {
        console.log(err);
    })
}

export {
    createChat,
    fetchChats,
    getChat,
    deleteChat
}
