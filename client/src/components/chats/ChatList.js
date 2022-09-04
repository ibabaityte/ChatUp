import React, {useEffect} from "react";
import {fetchChats} from "../../utils/chat/chatUtils";
import {connect} from "react-redux";

const ChatList = (props) => {

    const {
        setChat,
        socket,
        setMessages,
        chatList,
        setChatList,
        user
    } = props;

    useEffect(() => {
        fetchChats(user, setChat, socket, "", chatList, setChatList);
        socket.on("mostRecentMessages", messages => setMessages(messages));
    }, []);

    console.log(chatList);

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
                            <li key={key} value={name} onClick={() => fetchChats(user, setChat, socket, userId, chatList, setChatList)}>{name}</li>
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