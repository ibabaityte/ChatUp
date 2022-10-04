import {connect} from "react-redux";

// component imports
import SearchListItem from "./SearchListItem";

// util imports
import {handleClose} from "../../utils/header/headerUtils";

// style imports
import Typography from "@mui/material/Typography";
import {Popover} from "@mui/material";
import {paper, typography} from "../../styles/header/SearchList";

const SearchList = (props) => {

    const {
        anchorEl,
        setAnchorEl,
        searchedUsers,
        chatList,
        setChatList
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
            {searchedUsers !== [] ?
                searchedUsers.map((searchedUser, key) => {
                    return (
                        <SearchListItem
                            key={key}
                            searchedUser={searchedUser}
                            chatList={chatList}
                            setChatList={setChatList}
                        />
                    );
                })
                : null
            }
        </Popover>
    );
}

export default SearchList;