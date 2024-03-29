import {connect} from "react-redux";
import {useState} from "react";

// util imports
import {mapStateToProps} from "../../redux/reduxUtils";

// style imports
import {chatMember, chatRecipient, chatRecipientGrid} from "../../styles/chat/ChatStyles";
import Grid from "@mui/material/Grid";
import {chatHeaderAvatar} from "../../styles/messenger/ChatListStyles";
import {Avatar} from "@mui/material";

// component imports
import UserProfileModal from "../users/UserProfileModal";

const ChatRecipient = (props) => {

    const {
        chat,
        user
    } = props;

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <Grid item xs={10} xl={10} style={chatRecipientGrid}>
            {
                chat.users ?
                    chat.users.map((chatUser, key) => {
                        return chatUser._id !== user.userId ?
                            <div style={chatRecipient} key={key}>
                                <Avatar
                                    onClick={() => setModalOpen(true)}
                                    sx={chatHeaderAvatar}
                                    src={chatUser.image}
                                />
                                <p style={chatMember}>{chatUser.nameAndSurname}</p>
                                <UserProfileModal
                                    userInfo={chatUser}
                                    modalOpen={modalOpen}
                                    setModalOpen={setModalOpen}
                                />
                            </div>
                             : null
                    }) : null
            }
        </Grid>
    );
}

export default connect(mapStateToProps)(ChatRecipient);
