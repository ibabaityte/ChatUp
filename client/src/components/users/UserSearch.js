import React, {useState} from "react";
import {connect} from "react-redux";
import {socket} from "../../utils/socket/socketUtils";

import {search} from "../../utils/users/userUtils";
import {createChat} from "../../utils/chat/chatUtils";

const UserSearch = (props) => {

    const {
        setChat,
        chatList,
        setChatList,
        user
    } = props;

    const [keyword, setKeyword] = useState("");
    const [searchedUsers, setSearchedUsers] = useState([]);

    return (
        <div>
            <h2>User search</h2>
            <form>
                <input type="text" value={keyword} onChange={(e) => {setKeyword(e.currentTarget.value)}}/>
            </form>
            <button onClick={() => search(keyword, user, setSearchedUsers)}>Search</button>
            {
                searchedUsers !== [] ?
                    searchedUsers.map((searchedUser, key) => {
                        return (
                            <div key={key}>
                                <div onClick={() => {createChat(user, socket, searchedUser._id, setChat, chatList, setChatList)}}>{searchedUser.nameAndSurname}<button>send a message</button></div>
                            </div>
                        );
                    })
                    : null
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserSearch);