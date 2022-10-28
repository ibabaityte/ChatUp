import {useState} from "react";
import {connect} from "react-redux";

// util imports
import {createMessage} from "../../utils/message/utils";

// style imports
import {messageInput, messageInputContainer, sendButton} from "../../styles/chat/ChatStyles";
import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

const MessageInput = (props) => {

    const {
        chat,
        user
    } = props;

    const [message, setMessage] = useState("");

    return (
        <div style={messageInputContainer}>
            <TextField value={message}
                       style={messageInput}
                       variant="standard"
                       InputProps={{disableUnderline: true}}
                       placeholder="Send a message..."
                       onChange={e => {setMessage(e.target.value)}}
            />
            <IconButton onClick={(e) => {createMessage(e, setMessage, message, chat, user)}}
                        sx={sendButton}>
                <SendIcon/>
            </IconButton>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        chat: state.chat
    }
}

export default connect(mapStateToProps)(MessageInput);
