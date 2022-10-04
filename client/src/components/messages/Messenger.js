import {useState} from "react";

// style imports
import Grid from "@mui/material/Unstable_Grid2";
import {messengerContainer, chatContainer} from "../../styles/messenger/Messenger";

// component imports
import ChatList from "../chats/ChatList";
import Chat from "../chats/Chat";
import Header from "../header/Header";

const Messenger = () => {

    const [chatList, setChatList] = useState([]);

    return (
        <Grid container sx={messengerContainer}>
            <Grid item>
                <Header
                    chatList={chatList}
                    setChatList={setChatList}
                />
            </Grid>

            <Grid item sx={chatContainer}>
                <Grid item lg={3}>
                    <ChatList
                        chatList={chatList}
                        setChatList={setChatList}
                    />
                </Grid>

                <Grid item lg={9}>
                    <Chat/>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Messenger;
