import {connect} from "react-redux";

// util imports
import {deleteChat} from "../../utils/chat/chatUtils";
import {getChatAction} from "../../redux/actions";

// style imports
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';import {deleteIcon, deleteIconContainer} from "../../styles/chat/ChatStyles";

const DeleteChat = (props) => {

    const {
        chat,
        user,
        getChatAction,
        chatList,
        setChatList,
        setMessages
    } = props;

    return (
        <Grid item xs={2} xl={2} sx={deleteIconContainer}>
            <IconButton onClick={() => deleteChat(chat._id, user, getChatAction, chatList, setChatList, setMessages)}>
                <DeleteForeverIcon sx={deleteIcon}/>
            </IconButton>
        </Grid>
    );
}

const mapStateToProps = (state) => {
    return {
        chat: state.chat,
        user: state.user
    }
}

export default connect(mapStateToProps, {getChatAction})(DeleteChat);
