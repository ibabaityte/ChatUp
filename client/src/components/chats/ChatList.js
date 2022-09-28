import {useEffect} from "react";
import {fetchChats, getChat} from "../../utils/chat/chatUtils";
import {connect} from "react-redux";
import {socket} from "../../utils/socket/socketUtils";

const ChatList = (props) => {

    const {
        setChat,
        chatList,
        setChatList,
        user
    } = props;

    useEffect(() => {
        fetchChats(user, setChat, socket, "", chatList, setChatList);
    }, [setChat, user, setChatList]);

    return (
        <div>
            <h2>Chat List</h2>
            <ul>
            {
                chatList === [] ? null :
                    chatList.map((chat, key) => {
                        let name;
                        let userId;
                        if(chat.users[0].nameAndSurname === user.nameAndSurname) {
                            name = chat.users[1].nameAndSurname;
                            userId = chat.users[1]._id;
                        } else {
                            name = chat.users[0].nameAndSurname;
                            userId = chat.users[0]._id;
                        }
                        return (
                            <li key={key} value={name} onClick={() => getChat(user, setChat, socket, userId)}>{name}</li>
                        );
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

export default connect(mapStateToProps)(ChatList);