import {useState} from "react";

// style imports
import Grid from "@mui/material/Unstable_Grid2";
import {messengerContainer, chatContainer, headerContainer} from "../../styles/messenger/Messenger";

// component imports
import ChatList from "../chats/ChatList";
import Chat from "../chats/Chat";
import Header from "../header/Header";

const Messenger = () => {

    const [chatList, setChatList] = useState([]);

    return (
        <Grid container sx={messengerContainer}>
            <Grid item sx={headerContainer}>
                <Header
                    chatList={chatList}
                    setChatList={setChatList}
                />
            </Grid>

            <Grid item sx={chatContainer}>
                <Grid item xs={3} s={2} sm={2} md={3} lg={3}>
                    <ChatList
                        chatList={chatList}
                        setChatList={setChatList}
                    />
                </Grid>

                <Grid item xs={9} s={10} sm={10} md={9} lg={9}>
                    <Chat/>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Messenger;
