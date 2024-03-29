import {useState} from "react";
import {connect} from "react-redux";

// style imports
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {
    logoContainer,
    userSearchContainer,
    iconContainer,
    logo,
    headerStyles,
    userNameContainer,
    userName,
    avatar
} from "../../styles/header/HeaderStyles";

// utils imports
import {handleProfileMenuOpen} from "../../utils/header/headerUtils";
import {mapUserToProps} from "../../redux/reduxUtils";

// component imports
import UserDropdown from "./UserDropdown";
import UserSearch from "../search/UserSearch";
import {Avatar} from "@mui/material";

const Header = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const {
        chatList,
        setChatList,
        setMessages,
        user
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
                    setMessages={setMessages}
                />
            </Grid>
            <Grid item xs={1} sm={1} md={2} lg={4} xl={4} sx={iconContainer}>
                <Box sx={userNameContainer}>
                    <h3 style={userName}>{user.nameAndSurname.split(" ")[0]}</h3>
                </Box>
                <Avatar
                    onClick={(e) => handleProfileMenuOpen(e, setAnchorEl)}
                    sx={avatar}
                    src={user.image}
                />
            </Grid>
            <UserDropdown
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
            />
        </Grid>
    );
}

export default connect(mapUserToProps)(Header);
