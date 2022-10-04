import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {handleClose} from "../../utils/header/headerUtils";

const UserDropdown = (props) => {

    const {
        anchorEl,
        setAnchorEl
    } = props;

    const isMenuOpen = Boolean(anchorEl);

    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id='primary-search-account-menu'
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={() => handleClose(setAnchorEl)}
        >
            <MenuItem onClick={() => handleClose(setAnchorEl)}>Profile</MenuItem>
            <MenuItem onClick={() => handleClose(setAnchorEl)}>My account</MenuItem>
        </Menu>
    );
}

export default UserDropdown;
