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
        user
    } = props;

    const [keyword, setKeyword] = useState("");
    const [searchedUsers, setSearchedUsers] = useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);

    return (
        <div style={{width: "100%"}}>
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
