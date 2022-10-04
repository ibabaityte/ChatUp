import {useEffect, useState} from "react";

// util imports
import {socket, messageReceivedSocket} from "../../utils/socket/socketUtils";

// style imports
import Grid from "@mui/material/Unstable_Grid2";
import {messengerContainer, chatContainer} from "../../styles/messenger/Messenger";

// component imports
import UserSearch from "../search/UserSearch";
import ChatList from "../chats/ChatList";
import Chat from "../chats/Chat";
import Header from "../Header";

const Messenger = () => {

    const [messages, setMessages] = useState([]);
    const [chat, setChat] = useState({});
    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        socket.on("message received", (message) => messageReceivedSocket(message, messages, setMessages));
        socket.on("mostRecentMessages", messages => setMessages(messages));
    }, [messages, setMessages]);

    return (
        <Grid container sx={messengerContainer}>
            <Grid item>
                <Header/>
                {/*<UserSearch*/}
                {/*    setChat={setChat}*/}
                {/*    chatList={chatList}*/}
                {/*    setChatList={setChatList}*/}
                {/*/>*/}
            </Grid>

            <Grid item sx={chatContainer}>
                <Grid item lg={3}>
                    <ChatList
                        setChat={setChat}
                        chatList={chatList}
                        setChatList={setChatList}
                    />
                </Grid>

                <Grid item lg={9}>
                    <Chat
                        chat={chat}
                        messages={messages}
                        setMessages={setMessages}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Messenger;
