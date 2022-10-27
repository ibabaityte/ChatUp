import {connect} from "react-redux";
import {useEffect} from "react";

// util imports
import {getChatAction} from "../../redux/actions";

// component imports
import MessageInput from "../messages/MessageInput";
import MessageList from "../messages/MessageList";
import ChatHeader from "./ChatHeader";

// style imports
import {chatContainer, chatHeader, messageListContainer} from "../../styles/chat/ChatStyles";

const Chat = (props) => {

    const {
        chatList
    } = props;

    // console.log(chatList[0].users);

    // useEffect(() => {
    //     if(chatList.users.length > 0) {
    //         getChatAction(user, chatList.users[0]._id);
    //     }
    // }, [])

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
