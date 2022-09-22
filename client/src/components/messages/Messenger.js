import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import UserSearch from "../users/UserSearch";
import ChatList from "../chats/ChatList";
import Chat from "../chats/Chat";

import {messageReceivedSocket} from "../../utils/socket/socketUtils";

const Messenger = (props) => {

    const {socket} = props;

    console.log(socket);

    const [messages, setMessages] = useState([]);
    const [chat, setChat] = useState({});
    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        socket.on("message received", (message) => messageReceivedSocket(message, messages, setMessages));
    }, [messages]);

    return (
        <div>
            <UserSearch
                setChat={setChat}
                chatList={chatList}
                setChatList={setChatList}
            />

            <ChatList
                setChat={setChat}
                setMessages={setMessages}
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

const mapStateToProps = (state) => {
    return {
        user: state.user,
        socket: state.socket
    }
}

export default connect(mapStateToProps)(Messenger);