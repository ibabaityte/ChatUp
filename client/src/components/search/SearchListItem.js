import {connect} from "react-redux";

// util imports
import {createChat} from "../../utils/chat/chatUtils";
import {getChatAction} from "../../redux/actions";
import {mapUserToProps} from "../../redux/reduxUtils";

// style imports
import Typography from "@mui/material/Typography";
import {typography} from "../../styles/header/SearchListStyles";

const SearchListItem = (props) => {

    const {
        searchedUser,
        chatList,
        setChatList,
        setMessages,
        user,
        getChatAction
    } = props;

    return (
        <Typography sx={typography} onClick={() => {createChat(user, searchedUser._id, getChatAction, chatList, setChatList, setMessages)}}>{searchedUser.nameAndSurname}</Typography>
    );
}

export default connect(mapUserToProps, {getChatAction})(SearchListItem);
