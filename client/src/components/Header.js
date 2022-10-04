import {useState} from "react";

// style imports
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {iconContainer} from "../styles/header/Header";

// utils imports
import {handleProfileMenuOpen, renderMenu} from "../utils/header/headerUtils";
import UserSearch from "./search/UserSearch";
import Grid from "@mui/material/Unstable_Grid2";

const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    return (
        <Grid container>
            <AppBar position="static">
                <Toolbar>
                    <Grid item xs={3} sm={2} md={1} lg={1}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            ChatUp
                        </Typography>
                    </Grid>
                    <Grid item xs={9} md={6} lg={5}>
                        <UserSearch/>
                    </Grid>
                    <Grid item md={5} lg={6} xl={7} sx={iconContainer}>
                        <IconButton
                            size="large"
                            onClick={(e) => handleProfileMenuOpen(e, setAnchorEl)}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Grid>
                </Toolbar>
            </AppBar>
            {renderMenu(anchorEl, isMenuOpen, setAnchorEl)}
        </Grid>
    );
}

export default Header;
