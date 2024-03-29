const chatListContainer = {
    backgroundColor: "rgba(25, 118, 210, 0.5)",
    boxShadow: "3px 3px 6px 0px rgba(82,82,82,0.75)",
    WebkitBoxShadow: "3px 3px 6px 0px rgba(82,82,82,0.75)",
    MozBoxShadow: "3px 3px 6px 0px rgba(82,82,82,0.75)",
    height: "calc(90vh - 35px)",
    minHeight: "758px",
    padding: {
        sm: "24px 0",
        md: "24px 24px"
    },
    borderRadius: "5px",
    width: "100%",
    overflow: "auto",
    overflowWrap: "break-word"
}

const chatListItem = {
    display: "flex",
    flexDirection: "row",
    padding: "10px",
    marginBottom: "15px",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "254px",
    overflowWrap: "break-word"
}

const nameSurname = {
    display: {
        xs: "none",
        sm: "none",
        md: "none",
        lg: "block"
    },
    color: "white",
    fontSize: "18px",
    letterSpacing: "1px",
    fontFamily: "sans-serif",
    cursor: "pointer",
    padding: "0 0 0 10px",
    overflowWrap: "break-word"
}

const nameAndSurnameContainer = {
    overflowWrap: "break-word",
    display: {
        xs: "none",
        sm: "none",
        md: "none",
        lg: "block"
    },
}

const avatar = {
    cursor: "pointer",
    margin: "auto"
}

const chatHeaderAvatar = {
    width: 56,
    height: 56,
    cursor: "pointer",
    margin: "auto"
}

export {
    chatListContainer,
    chatListItem,
    nameSurname,
    nameAndSurnameContainer,
    avatar,
    chatHeaderAvatar
}
