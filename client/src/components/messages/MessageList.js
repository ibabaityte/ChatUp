import {useEffect, useState} from "react";
import {messageReceivedSocket, socket} from "../../utils/socket/socketUtils";

// component imports
import NoMessagesContainer from "../chats/NoMessagesContainer";
import Message from "../messages/Message";

// style imports
import {messageList} from "../../styles/chat/ChatStyles";

const MessageList = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on("message received", (message) => messageReceivedSocket(message, messages, setMessages));
        socket.on("mostRecentMessages", messages => setMessages(messages));
    }, [messages, setMessages]);


    return (
        <div id="message-list" style={messageList}>
            {
                messages.length < 1 ?
                    <NoMessagesContainer/>
                    :
                    messages.map((message, key) => {
                        return (
                            <Message key={key} author={message.author} message={message.content}/>
                        )
                    })
            }
        </div>
    );
}

export default MessageList;
