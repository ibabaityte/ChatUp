import {useEffect} from "react";
import {connect} from "react-redux";

import {fetchChats} from "../../utils/chat/chatUtils";

// util imports
import {getChatAction} from "../../redux/actions";

const ChatList = (props) => {

    const {
        chatList,
        setChatList,
        user,
        getChatAction
    } = props;

    useEffect(() => {
        fetchChats(user, "", chatList, setChatList);
    }, [user, setChatList]);

    return (
        <div>
            <h2>Chat List</h2>
            <ul>
            {
                chatList === [] ? null :
                    chatList.map((chat, key) => {
                        return <div key={key}>
                            {
                                chat.users.map((chatUser, key) => {
                                    if (chatUser.nameAndSurname !== user.nameAndSurname) {
                                        return (
                                            <li key={key} value={chatUser.nameAndSurname} onClick={() => getChatAction(user, chatUser.userId)}>{chatUser.nameAndSurname}</li>
                                        );
                                    }
                                })
                            }
                        </div>
                    })
            }
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getChatAction})(ChatList);
