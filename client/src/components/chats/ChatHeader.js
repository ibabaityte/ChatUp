import {connect} from "react-redux";

// style imports
import {chatHeader, chatMember} from "../../styles/chat/ChatStyles";

const ChatHeader = (props) => {

    const {
        chat,
        user
    } = props;

    return (
        <span>
            {
                chat.users ?
                    chat.users.map((chatUser, key) => {
                        return chatUser._id !== user.userId ?
                            <p style={chatMember} key={key} >{chatUser.nameAndSurname}</p> : null
                    }) : null
            }
        </span>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        chat: state.chat
    }
}

export default connect(mapStateToProps)(ChatHeader);
