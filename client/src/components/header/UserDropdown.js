import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {handleClose} from "../../utils/header/headerUtils";
import {logoutAction} from "../../redux/actions";
import {connect} from "react-redux";

const UserDropdown = (props) => {

    const {
        logoutAction,
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
            <MenuItem onClick={() => handleClose(setAnchorEl)}>My account</MenuItem>
            <MenuItem onClick={() => logoutAction()}>Logout</MenuItem>
        </Menu>
    );
}

export default connect(null, {logoutAction})(UserDropdown);
