import React, {useEffect, useState} from "react";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

import {connectSocket, messageReceivedSocket} from "../../utils/socket/socketUtils";

const Messenger = (props) => {

    const {socket} = props;

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on("connect", () => connectSocket(socket));
        socket.on("mostRecentMessages", messages => setMessages(messages));
    }, []);

    useEffect(() => {
        socket.on("message received", (message) => messageReceivedSocket(message, messages, setMessages))
    }, [messages]);

    return (
        <div>
            <MessageInput
                setMessage={setMessage}
                setMessages={setMessages}
                message={message}
                messages={messages}
                socket={socket}
            />
            <MessageList
                messages={messages}
            />
        </div>
    );
}

export default Messenger;