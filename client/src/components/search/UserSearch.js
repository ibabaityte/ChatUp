import React, {useState} from "react";
import {connect} from "react-redux";

// util imports
import {search} from "../../utils/users/userUtils";

// component imports
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";

// style imports
import Button from "@mui/material/Button";
import {button} from "../../styles/header/SearchInput";

const UserSearch = (props) => {

    const {
        setChat,
        chatList,
        setChatList,
        user
    } = props;

    const [keyword, setKeyword] = useState("");
    const [searchedUsers, setSearchedUsers] = useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);

    return (
        <div>
            <SearchInput
                keyword={keyword}
                setKeyword={setKeyword}
            />
            <Button variant="contained"
                    sx={button}
                    onClick={() => search(keyword, user, setSearchedUsers, setAnchorEl)}>Search
            </Button>
            <SearchList
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                searchedUsers={searchedUsers}
                setChat={setChat}
                chatList={chatList}
                setChatList={setChatList}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserSearch);
