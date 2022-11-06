import {useEffect, useState} from "react";
import {connect} from "react-redux";

// util imports
import {mapStateToProps} from "../../redux/reduxUtils";
import {getChatAction} from "../../redux/actions";
import {fetchChats} from "../../utils/chat/chatUtils";
import {connectSocket, socket, chatDeletedSocket, friendTypingSocket, friendNotTypingSocket} from "../../utils/socket/socketUtils";

// style imports
import Grid from '@mui/material/Grid';
import {
    messengerContainer,
    chatContainer,
    chatListContainer,
    headerContainer
} from "../../styles/messenger/MessengerStyles";

// component imports
import ChatList from "../chats/ChatList";
import Chat from "../chats/Chat";
import Header from "../header/Header";

const Messenger = (props) => {

    const {
        user,
        chat,
        getChatAction
    } = props;

    const [chatList, setChatList] = useState([]);
    const [messages, setMessages] = useState([]);
    const [friendTyping, setFriendTyping] = useState(false);
    const [typing, setTyping] = useState(false);

    useEffect(() => {
        fetchChats(user, chatList, setChatList);
        connectSocket(socket, chat._id);
        socket.on("user joined", () => fetchChats(user, chatList, setChatList))
        socket.on("chat deleted", () => chatDeletedSocket(user, chatList, setChatList, getChatAction, setMessages));
        socket.on("typing", () => friendTypingSocket(setFriendTyping))
        socket.on("not typing", () => friendNotTypingSocket(setFriendTyping))
    }, []);

    return (
        <div className="App">
            <Grid container sx={messengerContainer}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} style={headerContainer}>
                    <Header
                        chatList={chatList}
                        setChatList={setChatList}
                        setMessages={setMessages}
                    />
                </Grid>

                <Grid item xs={3} s={2} sm={2} md={3} lg={4} xl={3.5} sx={chatListContainer}>
                    <div style={{marginRight: "15px", overflowWrap: "break-word"}}>
                        <ChatList
                            chatList={chatList}
                            setChatList={setChatList}
                            setMessages={setMessages}
                        />
                    </div>
                </Grid>

                <Grid item xs={9} sm={10} md={9} lg={8} xl={8.5} sx={chatContainer}>
                    <Chat
                        chatList={chatList}
                        setChatList={setChatList}
                        messages={messages}
                        setMessages={setMessages}
                        friendTyping={friendTyping}
                        typing={typing}
                        setTyping={setTyping}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default connect(mapStateToProps, {getChatAction})(Messenger);
