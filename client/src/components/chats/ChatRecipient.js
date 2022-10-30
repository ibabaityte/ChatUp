import {connect} from "react-redux";

// style imports
import {chatMember, chatRecipient} from "../../styles/chat/ChatStyles";
import Grid from "@mui/material/Grid";

const ChatRecipient = (props) => {

    const {
        chat,
        user
    } = props;

    return (
        <Grid item xs={10} xl={10} style={chatRecipient}>
            {
                chat.users ?
                    chat.users.map((chatUser, key) => {
                        return chatUser._id !== user.userId ?
                            <p style={chatMember} key={key}>{chatUser.nameAndSurname}</p> : null
                    }) : null
            }
        </Grid>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        chat: state.chat
    }
}

export default connect(mapStateToProps)(ChatRecipient);
