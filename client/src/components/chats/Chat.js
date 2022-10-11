import {useEffect} from "react";
import {connect} from "react-redux";

// util imports
import {getChatAction} from "../../redux/actions";

// component imports
import MessageInput from "../messages/MessageInput";
import MessageList from "../messages/MessageList";
import ChatHeader from "./ChatHeader";

// style imports
import {chatContainer, chatHeader, messageListContainer} from "../../styles/chat/ChatStyles";

const Chat = (props) => {

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

const mapStateToProps = (state) => {
    return {
        user: state.user,
        chat: state.chat
    }
}

export default connect(mapStateToProps, {getChatAction})(Chat);
