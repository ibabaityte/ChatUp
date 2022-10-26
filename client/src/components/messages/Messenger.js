import {useState, useEffect} from "react";
import {socket} from "../../utils/socket/socketUtils";

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

const Messenger = () => {

    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        socket.on("nx", error => console.log(error))
    }, [])

    return (
        <div className="App">
            <Grid container sx={messengerContainer}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} style={headerContainer}>
                    <Header
                        chatList={chatList}
                        setChatList={setChatList}
                    />
                </Grid>

                <Grid item xs={3} s={2} sm={2} md={3} lg={4} xl={3} sx={chatListContainer}>
                    <div style={{marginRight: "15px", overflowWrap: "break-word"}}>
                        <ChatList
                            chatList={chatList}
                            setChatList={setChatList}
                        />
                    </div>
                </Grid>

                <Grid item xs={9} sm={10} md={9} lg={8} xl={9} sx={chatContainer}>
                    <Chat
                        chatList={chatList}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default Messenger;
