import {connect} from "react-redux";

// util imports
import {getChatAction} from "../../redux/actions";

// style imports
import {Avatar, ListItemAvatar} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import ListItem from "@mui/material/ListItem";
import {chatListItemContainer, nameSurname, avatar} from "../../styles/messenger/ChatList";

const ChatListItem = (props) => {

    const {
        chatUser,
        user,
        getChatAction
    } = props;

    return (
        <div style={chatListItemContainer}>
            <Avatar sx={avatar}>
                <ImageIcon />
            </Avatar>
            <ListItem value={chatUser.nameAndSurname} sx={nameSurname} onClick={() => getChatAction(user, chatUser._id)}>{chatUser.nameAndSurname}</ListItem>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getChatAction})(ChatListItem);
