import MessageInput from "../messages/MessageInput";
import MessageList from "../messages/MessageList";
import {connect} from "react-redux";

const Chat = (props) => {

    const {
        chat,
        messages,
        setMessages,
        user
    } = props;

    return (
        <div>
            <div>This is a conversation with:</div>
            <div>
                {
                    chat.users ?
                        chat.users.map((chatUser, key) => {
                            return chatUser.nameAndSurname !== user.nameAndSurname ?
                                    <div key={key}>{chatUser.nameAndSurname}</div> : null
                        }) : null
                }
            </div>

            <MessageInput
                setMessages={setMessages}
                messages={messages}
                chat={chat}
            />

            <MessageList
                messages={messages}
                setMessages={setMessages}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Chat);