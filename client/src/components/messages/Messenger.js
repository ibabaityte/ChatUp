import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import UserSearch from "../users/UserSearch";
import ChatList from "../chats/ChatList";
import Chat from "../chats/Chat";

import {messageReceivedSocket} from "../../utils/socket/socketUtils";

const Messenger = (props) => {

    const {socket} = props;

    const [messages, setMessages] = useState([]);
    const [chat, setChat] = useState({});
    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        socket.on("message received", (message) => messageReceivedSocket(message, messages, setMessages));
    }, [messages]);

    return (
        <div>
            <UserSearch
                socket={socket}
                setChat={setChat}
                chatList={chatList}
                setChatList={setChatList}
            />

            <ChatList
                setChat={setChat}
                socket={socket}
                setMessages={setMessages}
                chatList={chatList}
                setChatList={setChatList}
            />

            <Chat
                chat={chat}
                socket={socket}
                messages={messages}
                setMessages={setMessages}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Messenger);