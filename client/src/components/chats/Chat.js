// component imports
import MessageInput from "../messages/MessageInput";
import MessageList from "../messages/MessageList";
import ChatHeader from "./ChatHeader";

// style imports
import {chatContainer, chatHeader, messageListContainer} from "../../styles/chat/ChatStyles";

const Chat = (props) => {

    const {
        chatList,
        setChatList,
        messages,
        setMessages,
        friendTyping,
        typing,
        setTyping
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
                    friendTyping={friendTyping}
                    typing={typing}
                />
            </div>
            <div style={{height: "10%"}}>
                <MessageInput
                    setTyping={setTyping}
                />
            </div>
        </div>
    );
}

export default Chat;
