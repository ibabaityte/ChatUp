import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

import {messageReceivedSocket} from "../../utils/socket/socketUtils";
import {fetchChat} from "../../utils/chat/chatUtils";

const Messenger = (props) => {

    const {socket, user} = props;

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [chat, setChat] = useState({});

    useEffect(() => {
        // fetchChat(user, setChat, socket, receiver);
        socket.on("mostRecentMessages", messages => setMessages(messages));
    }, []);

    useEffect(() => {
        socket.on("message received", (message) => messageReceivedSocket(message, messages, setMessages));
        // socket.on("message received", (message) => console.log(messages));
        // console.log(messages);
    }, [messages]);

    const [receiver, setReceiver] = useState("");

    console.log(chat);

    return (
        <div>
            <div>{chat._id}</div>
            <div>
                {
                    chat.users ?
                    chat.users.map((user, key) => {
                        return (
                            <div key={key}>
                                <div>{user.name} {user.surname}</div>
                            </div>
                        );
                    }) : null
                }
            </div>
            <h3>Enter a user id to send them a message</h3>
            <form>
                <input type="text" value={receiver} onChange={e => {setReceiver(e.currentTarget.value)}}/>
            </form>
            <button onClick={() => fetchChat(user, setChat, socket, receiver)}>fetch chat</button>
            <MessageInput
                setMessage={setMessage}
                setMessages={setMessages}
                message={message}
                messages={messages}
                socket={socket}
                chat={chat}
            />
            <MessageList
                messages={messages}
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