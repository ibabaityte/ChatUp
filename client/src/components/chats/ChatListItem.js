import {connect} from "react-redux";

// util imports
import {getChatAction} from "../../redux/actions";
import {mapUserToProps} from "../../redux/reduxUtils";

// style imports
import {Avatar} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import {chatListItem, nameSurname, nameAndSurnameContainer, avatar} from "../../styles/messenger/ChatListStyles";
import Grid from "@mui/material/Grid";

const ChatListItem = (props) => {

    const {
        chatUser,
        setMessages,
        user,
        getChatAction
    } = props;

    return (
        <Grid container sx={chatListItem} onClick={() => getChatAction(user, chatUser._id, setMessages)}>
            <Grid item xs={12} sm={12} md={12} lg={3} xl={2}>
                <Avatar
                    sx={avatar}
                    src={chatUser.image}
                />
            </Grid>
            <Grid item lg={9} xl={10} sx={{nameAndSurnameContainer}}>
                <ListItem value={chatUser.nameAndSurname} sx={nameSurname}>{chatUser.nameAndSurname}</ListItem>
            </Grid>
        </Grid>
    );
}

export default connect(mapUserToProps, {getChatAction})(ChatListItem);
