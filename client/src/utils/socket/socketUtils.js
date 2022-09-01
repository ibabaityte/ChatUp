const connectSocket = (socket) => {
    socket.emit("join chat", {id: "1"});
}

const messageReceivedSocket = (message, messages, setMessages) => {
    const newMessages = [...messages, message];
    setMessages(newMessages);
}

export {connectSocket, messageReceivedSocket}