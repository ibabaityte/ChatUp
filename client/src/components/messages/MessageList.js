import {useEffect, useState} from "react";
import {messageReceivedSocket, socket} from "../../utils/socket/socketUtils";

const MessageList = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on("message received", (message) => messageReceivedSocket(message, messages, setMessages));
        socket.on("mostRecentMessages", messages => setMessages(messages));
    }, [messages, setMessages]);

    return (
        <div>
            <h3>message list</h3>
            {
                messages.length < 1 ?
                    <div>No messages</div>
                    :
                    messages.map((message, key) => {
                        return (
                            <div key={key}>
                                <div><b>{message.author.nameAndSurname}</b></div>
                                <div>{message.content}</div>
                            </div>
                        )
                    })
            }
        </div>
    );
}

export default MessageList;
