const chatContainer = {
    flexDirection: "column",
    backgroundColor: "rgba(25, 118, 210, 0.5)",
    height: "calc(90vh - 35px)",
    minHeight: "758px",
    borderRadius: "5px",
}

const chatHeader = {
    minHeight: "10%",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    overflowX: "auto",
    width: "100%"
}

const messageListContainer = {
    height: "80%"
}

const messageList = {
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    boxSizing: "border-box",
    padding: "10px 20px"
}

const chatMember = {
    color: "white",
    letterSpacing: "2px",
    fontFamily: "Roboto, sans-serif",
    fontSize: "18px",
    display: "inline-block",
    paddingLeft: "15px",
    margin: "auto",
}

const noMessagesContainer = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const noMessagesText = {
    fontSize: "20px",
    fontFamily: "Roboto, sans-serif",
    color: "rgba(1,1,1,0.7)"
}

const messageInputContainer = {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 15px",
}

const messageInput = {
    width: "90%",
    height: "100%",
    justifyContent: "center",
    boxSizing: "border-box"
}

const sendButton = {
    color: "rgba(1,1,1,0.6)"
}

const messageContainer = {
    maxWidth: "45%",
    minWidth: "40%",
    backgroundColor: "rgba(255,255,255,0.5)",
    boxShadow: "2px 2px 4px 0px rgba(82,82,82,0.75)",
    WebkitBoxShadow: "2px 2px 4px 0px rgba(82,82,82,0.75)",
    MozBoxShadow: "2px 2px 4px 0px rgba(82,82,82,0.75)",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
    marginTop: "10px",
    fontFamily: "Roboto, sans-serif"
}

const authorMessage = {
    marginLeft: "auto"
}

const friendMessage = {
    marginRight: "auto"
}

const nameAndSurname = {
    marginBottom: "10px"
}

const messageText = {
    overflowWrap: "break-word"
}

const chatRecipientContainer = {
    display: "flex",
    flexDirection: "row"
}

const chatRecipientGrid = {
    display: "flex",
    alignItems: "center"
}

const chatRecipient = {
    display: "flex",
    flexDirection: "row",
    paddingLeft: "15px"
}

const deleteIconContainer = {
    display: "flex",
    justifyContent: "flex-end"
}

const deleteIcon = {
    color: "rgb(153, 25, 15, 0.9)",
    fontSize: "40px"
}

export {
    chatContainer,
    chatHeader,
    messageListContainer,
    messageList,
    chatMember,
    noMessagesText,
    noMessagesContainer,
    messageInputContainer,
    messageInput,
    sendButton,
    messageContainer,
    authorMessage,
    friendMessage,
    nameAndSurname,
    messageText,
    chatRecipientContainer,
    chatRecipientGrid,
    chatRecipient,
    deleteIconContainer,
    deleteIcon
};
