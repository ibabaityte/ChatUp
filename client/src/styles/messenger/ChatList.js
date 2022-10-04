const chatListContainer = {
    flexDirection: "column",
    backgroundColor: "#1976d2",
    height: "100%",
    marginRight: "8px",
    padding: "0 24px",
    borderRadius: "5px"
}

const chatListItemContainer = {
    display: "flex",
    flexDirection: "row",
    padding: "10px",
    margin: "5px 0",
    justifyContent: "center",
    alignItems: "center"
}

const nameSurname = {
    display: {
        xs: "none",
        md: "block"
    },
    color: "white",
    letterSpacing: "1px",
    fontFamily: "sans-serif",
    cursor: "pointer"
}

const listHeading = {
    color: "white",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
    letterSpacing: "5px",
    textAlign: "center",
    cursor: "default"
}

const avatar = {
    cursor: "pointer"
}

export {
    chatListContainer,
    chatListItemContainer,
    nameSurname,
    listHeading,
    avatar
}
