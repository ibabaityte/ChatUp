import {connect} from "react-redux";

const ChatHeader = (props) => {

    const {
        chat,
        user
    } = props;

    return (
        <div>
            <div>This is a conversation with:</div>
            <div>
                {
                    chat.users ?
                        chat.users.map((chatUser, key) => {
                            return chatUser._id !== user.userId ?
                                <div key={key}>{chatUser.nameAndSurname}</div> : null
                        }) : null
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        chat: state.chat
    }
}

export default connect(mapStateToProps)(ChatHeader);
