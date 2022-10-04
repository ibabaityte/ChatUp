const handleProfileMenuOpen = (event, setAnchorEl) => {
    setAnchorEl(event.currentTarget);
};

const handleClose = (setAnchorEl) => {
    setAnchorEl(null);
};
export {
    handleProfileMenuOpen,
    handleClose
}
