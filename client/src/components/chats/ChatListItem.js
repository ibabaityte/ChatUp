import {connect} from "react-redux";

// util imports
import {getChatAction} from "../../redux/actions";

// style imports
import {Avatar} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import ListItem from "@mui/material/ListItem";
import {chatListItem, nameSurname, nameAndSurnameContainer, avatar} from "../../styles/messenger/ChatListStyles";
import Grid from "@mui/material/Grid";

const ChatListItem = (props) => {

    const {
        chatUser,
        user,
        getChatAction
    } = props;

    return (
        <Grid container sx={chatListItem}>
            <Grid item xs={12} sm={12} md={12} lg={3} xl={2}>
                <Avatar sx={avatar}>
                    <ImageIcon />
                </Avatar>
            </Grid>
            <Grid item lg={9} xl={10} sx={{nameAndSurnameContainer}}>
                <ListItem value={chatUser.nameAndSurname} sx={nameSurname} onClick={() => getChatAction(user, chatUser._id)}>{chatUser.nameAndSurname}</ListItem>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getChatAction})(ChatListItem);
