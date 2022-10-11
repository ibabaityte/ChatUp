import {connect} from "react-redux";

// style imports
import {messageContainer, authorMessage, friendMessage, nameAndSurname} from "../../styles/chat/ChatStyles";

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
            <div>{message}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Message);
