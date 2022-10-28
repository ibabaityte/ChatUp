import React, {useState} from "react";
import {connect} from "react-redux";

// util imports
import {search} from "../../utils/users/userUtils";

// component imports
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";

// style imports
import Button from "@mui/material/Button";
import {button} from "../../styles/header/SearchInputStyles";

const UserSearch = (props) => {

    const {
        chatList,
        setChatList,
        setMessages,
        user
    } = props;

    const [keyword, setKeyword] = useState("");
    const [searchedUsers, setSearchedUsers] = useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);

    return (
        <div style={{width: "100%"}}>
            <form>
                <SearchInput
                    keyword={keyword}
                    setKeyword={setKeyword}
                />
                <Button variant="contained"
                        sx={button}
                        type="submit"
                        onClick={(e) => search(e, keyword, setKeyword, user, setSearchedUsers, setAnchorEl)}>Search
                </Button>
            </form>
            <SearchList
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                searchedUsers={searchedUsers}
                chatList={chatList}
                setChatList={setChatList}
                setMessages={setMessages}
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
