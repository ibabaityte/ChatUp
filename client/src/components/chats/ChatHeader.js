import {connect} from "react-redux";
import ChatRecipient from "./ChatRecipient";
import DeleteChat from "./DeleteChat";

// style imports
import {chatRecipientContainer} from "../../styles/chat/ChatStyles";
import Grid from "@mui/material/Grid";

const ChatHeader = (props) => {

    const {
        chatList,
        setChatList,
        setMessages,
        chat
    } = props;

    return (
        <Grid item xs={12} xl={12} style={chatRecipientContainer}>
            <ChatRecipient/>
            {
                chat._id !== undefined ?
                    <DeleteChat
                        chatList={chatList}
                        setChatList={setChatList}
                        setMessages={setMessages}
                    />
                    :
                    null
            }
        </Grid>
    );
}

const mapStateToProps = (state) => {
    return {
        chat: state.chat
    }
}

export default connect(mapStateToProps)(ChatHeader);
