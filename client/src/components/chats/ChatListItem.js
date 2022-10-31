import {connect} from "react-redux";

// util imports
import {getChatAction} from "../../redux/actions";
import {mapUserToProps} from "../../redux/reduxUtils";

// style imports
import {Avatar} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
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
                {/*<Avatar sx={avatar} src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fperson&psig=AOvVaw17wRrIvmbT-7sdgNmukdcl&ust=1667234101044000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPj2yZSxiPsCFQAAAAAdAAAAABAE"/>*/}
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
