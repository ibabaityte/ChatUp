// component imports
import SearchListItem from "./SearchListItem";
import StatusMsg from "../StatusMsg";

// util imports
import {handleClose} from "../../utils/header/headerUtils";

// style imports
import {Popover} from "@mui/material";
import {paper} from "../../styles/header/SearchListStyles";

const SearchList = (props) => {

    const {
        anchorEl,
        setAnchorEl,
        searchedUsers,
        chatList,
        setChatList,
        setMessages
    } = props;

    const open = Boolean(anchorEl);

    return (
        <Popover
            id="popover"
            open={open}
            anchorEl={document.getElementsByClassName("search")[0]}
            onClose={() => handleClose(setAnchorEl)}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            PaperProps={{
                style: paper
            }}
        >
            <StatusMsg/>
            {searchedUsers !== [] ?
                searchedUsers.map((searchedUser, key) => {
                    return (
                        <SearchListItem
                            key={key}
                            searchedUser={searchedUser}
                            chatList={chatList}
                            setChatList={setChatList}
                            setMessages={setMessages}
                        />
                    );
                })
                : null
            }
        </Popover>
    );
}

export default SearchList;
