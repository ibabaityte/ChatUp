import {useEffect, useState} from "react";
import {socket} from "../../utils/socket/socketUtils";

import UserSearch from "../users/UserSearch";
import ChatList from "../chats/ChatList";
import Chat from "../chats/Chat";

import {messageReceivedSocket} from "../../utils/socket/socketUtils";

const Messenger = () => {

    const [messages, setMessages] = useState([]);
    const [chat, setChat] = useState({});
    const [chatList, setChatList] = useState([]);


    useEffect(() => {
        socket.on("message received", (message) => messageReceivedSocket(message, messages, setMessages));
        socket.on("mostRecentMessages", messages => setMessages(messages));
    }, [messages, setMessages]);

    return (
        <div>
            <UserSearch
                setChat={setChat}
                chatList={chatList}
                setChatList={setChatList}
            />

            <ChatList
                setChat={setChat}
                chatList={chatList}
                setChatList={setChatList}
            />

            <Chat
                chat={chat}
                messages={messages}
                setMessages={setMessages}
            />
        </div>
    );
}

export default Messenger;