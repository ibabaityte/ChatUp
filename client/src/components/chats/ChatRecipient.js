import {connect} from "react-redux";

// util imports
import {mapStateToProps} from "../../redux/reduxUtils";

// style imports
import {chatMember, chatRecipient, chatRecipientGrid} from "../../styles/chat/ChatStyles";
import Grid from "@mui/material/Grid";
import {chatHeaderAvatar} from "../../styles/messenger/ChatListStyles";
import {Avatar} from "@mui/material";

const ChatRecipient = (props) => {

    const {
        chat,
        user
    } = props;

    return (
        <Grid item xs={10} xl={10} style={chatRecipientGrid}>
            {
                chat.users ?
                    chat.users.map((chatUser, key) => {
                        return chatUser._id !== user.userId ?
                            <div style={chatRecipient}>
                                <Avatar
                                    sx={chatHeaderAvatar}
                                    src={'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'}
                                />
                                <p style={chatMember} key={key}>{chatUser.nameAndSurname}</p>
                            </div>
                             : null
                    }) : null
            }
        </Grid>
    );
}

export default connect(mapStateToProps)(ChatRecipient);
