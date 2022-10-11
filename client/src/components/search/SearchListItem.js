import {connect} from "react-redux";

// util imports
import {createChat} from "../../utils/chat/chatUtils";
import {getChatAction} from "../../redux/actions";

// style imports
import Typography from "@mui/material/Typography";
import {typography} from "../../styles/header/SearchListStyles";

const SearchListItem = (props) => {

    const {
        searchedUser,
        chatList,
        setChatList,
        user,
        getChatAction
    } = props;

    return (
        <Typography sx={typography} onClick={() => {createChat(user, searchedUser._id, getChatAction, chatList, setChatList)}}>{searchedUser.nameAndSurname}</Typography>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getChatAction})(SearchListItem);
