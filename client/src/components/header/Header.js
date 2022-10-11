import {useState} from "react";

// style imports
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {
    logoContainer,
    userSearchContainer,
    iconContainer,
    logo,
    headerStyles,
    userIcon
} from "../../styles/header/HeaderStyles";

// utils imports
import {handleProfileMenuOpen} from "../../utils/header/headerUtils";
import UserSearch from "../search/UserSearch";
import Grid from '@mui/material/Grid';


// component imports
import UserDropdown from "./UserDropdown";

const Header = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const {
        chatList,
        setChatList
    } = props;

    return (
        <Grid container sx={headerStyles}>
            <Grid item xs={3} sm={2} md={2} lg={2} xl={1} sx={logoContainer}>
                <Typography variant="h6" sx={logo}>ChatUp</Typography>
            </Grid>
            <Grid item xs={9} sm={9} md={8} lg={6} xl={7} sx={userSearchContainer}>
                <UserSearch
                    chatList={chatList}
                    setChatList={setChatList}
                />
            </Grid>
            <Grid item xs={1} sm={1} md={2} lg={4} xl={4} sx={iconContainer}>
                <IconButton onClick={(e) => handleProfileMenuOpen(e, setAnchorEl)}>
                    <AccountCircle sx={userIcon}/>
                </IconButton>
            </Grid>
            <UserDropdown
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
            />
        </Grid>
    );
}

export default Header;
