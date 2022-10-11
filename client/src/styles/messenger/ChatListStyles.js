const chatListContainer = {
    backgroundColor: "#1976d2",
    height: "calc(90vh - 35px)",
    minHeight: "758px",
    padding: {
        sm: "24px 0",
        md: "24px 24px"
    },
    borderRadius: "5px",
}

const chatListItem = {
    display: "flex",
    flexDirection: "row",
    padding: "10px",
    marginBottom: "15px",
    justifyContent: "center",
    alignItems: "center"
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
    cursor: "pointer"
}

const listHeading = {
    display: "none",
    color: "white",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
    fontSize: "20px",
    letterSpacing: "5px",
    textAlign: "center",
    cursor: "default",
    padding: "15px 0"
}

const avatar = {
    cursor: "pointer"
}

export {
    chatListContainer,
    chatListItem,
    nameSurname,
    listHeading,
    avatar
}
