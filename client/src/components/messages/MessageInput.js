import React, {useState} from "react";
import {connect} from "react-redux";
import {sendMessage} from "../../utils/message/utils";
import {socket} from "../../utils/socket/socketUtils";

const MessageInput = (props) => {
    const {
        setMessages,
        messages,
        chat,
        user
    } = props;

    const [message, setMessage] = useState("");

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