import {connect} from "react-redux";
import {useState} from "react";

// component imports
import UserProfileModal from "../users/UserProfileModal";

// util imports
import {logoutAction} from "../../redux/actions";
import {handleClose} from "../../utils/header/headerUtils";
import {mapUserToProps} from "../../redux/reduxUtils";

// style imports
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const UserDropdown = (props) => {

    const {
        logoutAction,
        anchorEl,
        setAnchorEl,
        user
    } = props;

    const isMenuOpen = Boolean(anchorEl);

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
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
                <MenuItem onClick={() => setModalOpen(true)}>My account</MenuItem>
                <MenuItem onClick={() => logoutAction()}>Logout</MenuItem>
            </Menu>
            <UserProfileModal
                userInfo={user}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
            />
        </div>
    );
}

export default connect(mapUserToProps, {logoutAction})(UserDropdown);
