import React from "react";
import {sendMessage} from "../../utils/message/utils";

const MessageInput = (props) => {
    const {
        setMessage,
        setMessages,
        message,
        messages,
        socket
    } = props;
    return (
        <div>
            <form>
                <input type="text" value={message} onChange={e => {setMessage(e.target.value)}}/>
                <button onClick={(e) => {sendMessage(e, setMessage, setMessages, message, messages, socket)}}>submit</button>
            </form>
        </div>
    );
}

export default MessageInput;