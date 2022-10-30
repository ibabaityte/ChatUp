import {connect} from "react-redux";

// util imports
import {mapUserToProps} from "../../redux/reduxUtils";

// style imports
import {messageContainer, authorMessage, friendMessage, nameAndSurname, messageText} from "../../styles/chat/ChatStyles";

const Message = (props) => {

    const {
        user,
        author,
        message
    } = props;

    const isAuthor = Boolean(user.userId === author._id);

    return (
        <div style={{
            ...messageContainer,
            ...isAuthor ? authorMessage : friendMessage}}>
            <div style={nameAndSurname}><b>{author.nameAndSurname}</b></div>
            <div style={messageText}>{message}</div>
        </div>
    )
}

export default connect(mapUserToProps)(Message);
