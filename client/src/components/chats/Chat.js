// component imports
import MessageInput from "../messages/MessageInput";
import MessageList from "../messages/MessageList";
import ChatHeader from "./ChatHeader";

import {chatContainer, chatHeader, messageListContainer} from "../../styles/chat/ChatStyles";

const Chat = () => {

    return (
        <div style={chatContainer}>
            <div style={chatHeader}>
                <ChatHeader/>
            </div>
            <div style={messageListContainer}>
                <MessageList/>
            </div>
            <div style={{height: "10%"}}>
                <MessageInput/>
            </div>
        </div>
    );
}

export default Chat;
