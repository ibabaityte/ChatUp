import {connect} from "react-redux";

// util imports
import {getChatAction} from "../../redux/actions";
import {mapUserToProps} from "../../redux/reduxUtils";

// component imports
import ChatListItem from "./ChatListItem";

// style imports
import Grid from '@mui/material/Grid';
import {chatListContainer} from "../../styles/messenger/ChatListStyles";
import "../../styles/messenger/ChatList.css";

const ChatList = (props) => {

    const {
        chatList,
        setMessages,
        user
    } = props;

    return (
        <Grid item sx={chatListContainer}>
            {
                chatList === [] ? null :
                    chatList.map((chat, key) => {
                        return <div key={key} className="chatListItemContainer">
                            {
                                chat.users.map((chatUser, key) => {
                                    if (chatUser._id !== user.userId) {
                                        return (
                                            <ChatListItem
                                                key={key}
                                                chatUser={chatUser}
                                                setMessages={setMessages}
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

export default connect(mapUserToProps, {getChatAction})(ChatList);
