import {useState} from "react";
import {connect} from "react-redux";

// util imports
import {createMessage} from "../../utils/message/utils";
import {mapStateToProps} from "../../redux/reduxUtils";
import {socket} from "../../utils/socket/socketUtils";

// style imports
import {messageInput, messageInputContainer, sendButton} from "../../styles/chat/ChatStyles";
import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

const MessageInput = (props) => {

    const {
        setTyping,
        chat,
        user
    } = props;

    const [message, setMessage] = useState("");

    return (
        <div style={{height: "100%"}} >
            <form style={messageInputContainer}>
                <TextField value={message}
                           style={messageInput}
                           variant="standard"
                           InputProps={{disableUnderline: true}}
                           placeholder="Send a message..."
                           onFocus={() => {
                               socket.emit("typing", chat);
                               setTyping(true);
                           }}
                           onBlur={() => {
                               socket.emit("not typing", chat);
                               setTyping(false);
                           }}
                           onChange={e => {
                               setMessage(e.target.value)
                           }}
                />
                <IconButton sx={sendButton} type="submit" onClick={(e) => createMessage(e, setMessage, message, chat, user)}>
                    <SendIcon/>
                </IconButton>
            </form>
        </div>
    );
}

export default connect(mapStateToProps)(MessageInput);
