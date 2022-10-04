import {connect} from "react-redux";

// util imports
import {createChat} from "../../utils/chat/chatUtils";
import {socket} from "../../utils/socket/socketUtils";

// style imports
import Typography from "@mui/material/Typography";
import {typography} from "../../styles/header/SearchList";

const SearchListItem = (props) => {

    const {
        searchedUser,
        setChat,
        chatList,
        setChatList,
        user
    } = props;

    return (
        <Typography sx={typography} onClick={() => {createChat(user, socket, searchedUser._id, setChat, chatList, setChatList)}}>{searchedUser.nameAndSurname}</Typography>
    );
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(SearchListItem);
