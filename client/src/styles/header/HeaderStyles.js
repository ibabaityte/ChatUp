const logoContainer = {
    display: "flex",
    alignItems: "center"
}

const userSearchContainer = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
}

const iconContainer = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
}

const headerStyles = {
    backgroundColor: "rgba(25, 118, 210, 0.5)",
    boxShadow: "3px 3px 6px 0px rgba(82,82,82,0.75)",
    WebkitBoxShadow: "3px 3px 6px 0px rgba(82,82,82,0.75)",
    MozBoxShadow: "3px 3px 6px 0px rgba(82,82,82,0.75)",
    borderRadius: "5px",
    width: "100%",
    height: "calc(10vh - 10px)",
    minHeight: "78px",
    padding: "0 15px"
}

const logo = {
    fontWeight: "bold",
    cursor: "default",
    color: "white"
}

const userIcon = {
    color: "white"
}

const userNameContainer = {
    display: {
        xs: "none",
        sm: "none",
        md: "block",
        lg: "block"
    },
}

const userName = {
    color: "white",
    fontFamily: "Roboto, sans-serif",
    letterSpacing: "2px"
}

const avatar = {
    cursor: "pointer",
    height: 48,
    width: 48,
    margin: "0 0 0 20px"
}

export {
    logoContainer,
    userSearchContainer,
    iconContainer,
    headerStyles,
    logo,
    userIcon,
    userNameContainer,
    userName,
    avatar
}
