import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const handleProfileMenuOpen = (event, setAnchorEl) => {
    setAnchorEl(event.currentTarget);
};

const handleClose = (setAnchorEl) => {
    setAnchorEl(null);
};

const renderMenu = (anchorEl, isMenuOpen, setAnchorEl) => (
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

export {
    handleProfileMenuOpen,
    renderMenu,
    handleClose
}
