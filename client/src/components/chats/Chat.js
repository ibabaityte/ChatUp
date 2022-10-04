// component imports
import MessageInput from "../messages/MessageInput";
import MessageList from "../messages/MessageList";
import ChatHeader from "./ChatHeader";

const Chat = () => {

    return (
        <div>
            <ChatHeader/>
            <MessageList/>
            <MessageInput/>
        </div>
    );
}

export default Chat;
