import React from "react";
import {connect} from "react-redux";
import {sendMessage} from "../../utils/message/utils";

const MessageInput = (props) => {
    const {
        setMessage,
        setMessages,
        message,
        messages,
        socket,
        chat,
        user
    } = props;

    return (
        <div>
            <h3>Send a message</h3>
            <form>
                <input type="text" value={message} onChange={e => {setMessage(e.target.value)}}/>
                <button onClick={(e) => {sendMessage(e, setMessage, setMessages, message, messages, socket, chat, user.userId)}}>submit</button>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(MessageInput);