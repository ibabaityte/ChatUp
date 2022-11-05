import {connect} from "react-redux";

// util imports
import {deleteChat} from "../../utils/chat/chatUtils";
import {getChatAction} from "../../redux/actions";
import {mapStateToProps} from "../../redux/reduxUtils";
import {socket} from "../../utils/socket/socketUtils";

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
            <IconButton onClick={() => deleteChat(chat._id, user, getChatAction, chatList, setChatList, setMessages, socket)}>
                <DeleteForeverIcon sx={deleteIcon}/>
            </IconButton>
        </Grid>
    );
}

export default connect(mapStateToProps, {getChatAction})(DeleteChat);
