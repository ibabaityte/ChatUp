import {useEffect} from "react";
import {connect} from "react-redux";

// util imports
import {fetchChats} from "../../utils/chat/chatUtils";

// component imports
import ChatListItem from "./ChatListItem";

// style imports
// import Grid from "@mui/material/Unstable_Grid2";
import Grid from '@mui/material/Grid';
import {chatListContainer, listHeading} from "../../styles/messenger/ChatListStyles";
import List from '@mui/material/List';
import "../../styles/messenger/ChatList.css";

const ChatList = (props) => {

    const {
        chatList,
        setChatList,
        user
    } = props;

    useEffect(() => {
        fetchChats(user, "", chatList, setChatList);
    }, [user, setChatList]);

    return (
        <Grid item sx={chatListContainer}>
            {
                chatList === [] ? null :
                    chatList.map((chat, key) => {
                        return <div key={key} className="chatListItemContainer">
                            {
                                chat.users.map((chatUser, key) => {
                                    if (chatUser.nameAndSurname !== user.nameAndSurname) {
                                        return (
                                            <ChatListItem
                                                key={key}
                                                chatUser={chatUser}
                                            />
                                        );
                                    }
                                })
                            }
                        </div>
                    })
            }
        </Grid>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(ChatList);
