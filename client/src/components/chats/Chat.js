import {connect} from "react-redux";
import {useEffect} from "react";

// util imports
import {getChatAction} from "../../redux/actions";
import {mapStateToProps} from "../../redux/reduxUtils";

// component imports
import MessageInput from "../messages/MessageInput";
import MessageList from "../messages/MessageList";
import ChatHeader from "./ChatHeader";

// style imports
import {chatContainer, chatHeader, messageListContainer} from "../../styles/chat/ChatStyles";
import {messageReceived, socket} from "../../utils/socket/socketUtils";

const Chat = (props) => {

    const {
        chatList,
        setChatList,
        messages,
        setMessages,
    } = props;

    return (
        <div style={chatContainer}>
            <div style={chatHeader}>
                <ChatHeader
                    chatList={chatList}
                    setChatList={setChatList}
                    setMessages={setMessages}
                />
            </div>
            <div style={messageListContainer}>
                <MessageList
                    messages={messages}
                    setMessages={setMessages}
                    chatList={chatList}
                />
            </div>
            <div style={{height: "10%"}}>
                <MessageInput/>
            </div>
        </div>
    );
}

export default Chat;
