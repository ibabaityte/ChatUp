const chatContainer = {
    flexDirection: "column",
    backgroundColor: "rgba(25, 118, 210)",
    height: "calc(90vh - 35px)",
    minHeight: "758px",
    borderRadius: "5px",
}

const chatHeader = {
    height: "10%",
    backgroundColor: "rgba(25, 118, 210)",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
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
    backgroundColor: "rgba(255, 255, 255, 0.3)",
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
    nameAndSurname
};
