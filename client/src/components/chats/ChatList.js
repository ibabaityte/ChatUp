import {useEffect} from "react";
import {connect} from "react-redux";

// util imports
import {fetchChats} from "../../utils/chat/chatUtils";
import {getChatAction} from "../../redux/actions";

// component imports
import ChatListItem from "./ChatListItem";

// style imports
import Grid from '@mui/material/Grid';
import {chatListContainer} from "../../styles/messenger/ChatListStyles";
import "../../styles/messenger/ChatList.css";

const ChatList = (props) => {

    const {
        chat,
        getChatAction,
        chatList,
        setChatList,
        user
    } = props;

    useEffect(() => {
        fetchChats(user, chat, getChatAction, chatList, setChatList);
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
        user: state.user,
        chat: state.chat
    }
}

export default connect(mapStateToProps, {getChatAction})(ChatList);
