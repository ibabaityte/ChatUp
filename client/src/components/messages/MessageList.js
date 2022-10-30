import {useEffect} from "react";
import {connect} from "react-redux";
import {messageReceived, socket} from "../../utils/socket/socketUtils";
import {getRecentMessages} from "../../utils/message/utils";

// component imports
import NoMessagesContainer from "../chats/NoMessagesContainer";
import Message from "../messages/Message";

// style imports
import {messageList} from "../../styles/chat/ChatStyles";

const MessageList = (props) => {

    const {
        messages,
        setMessages,
        chatList,
        chat,
        user
    } = props;

    useEffect(() => {
        socket.on("message received", (message) => messageReceived(message, messages, setMessages));

        // scrolls the message list to the bottom
        setTimeout(() => {
            let msgList = document.getElementById("message-list");
            msgList.scrollTop = msgList.scrollHeight;
        }, 10);

        // socket.on("mostRecentMessages", messages => setMessages(messages));
    }, [messages]);

    useEffect(() => {
        getRecentMessages(chat._id, user, setMessages);
    }, [])

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

const mapStateToProps = (state) => {
    return {
        user: state.user,
        chat: state.chat
    }
}

export default connect(mapStateToProps)(MessageList);
