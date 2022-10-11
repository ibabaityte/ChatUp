import {connect} from "react-redux";

// util imports
import {getChatAction} from "../../redux/actions";

// style imports
import {Avatar} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import ListItem from "@mui/material/ListItem";
import {chatListItem, nameSurname, avatar} from "../../styles/messenger/ChatListStyles";
import Grid from "@mui/material/Grid";

const ChatListItem = (props) => {

    const {
        chatUser,
        user,
        getChatAction
    } = props;

    return (
        <Grid item sx={chatListItem}>
            <Avatar sx={avatar}>
                <ImageIcon />
            </Avatar>
            <ListItem value={chatUser.nameAndSurname} sx={nameSurname} onClick={() => getChatAction(user, chatUser._id)}>{chatUser.nameAndSurname}</ListItem>
        </Grid>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getChatAction})(ChatListItem);
