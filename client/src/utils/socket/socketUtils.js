const connectSocket = (socket, chatId) => {
    socket.emit("join chat", {id: chatId});
}

const messageReceivedSocket = (message, messages, setMessages) => {
    if(messages !== []) {
        const newMessages = [...messages, message];
        setMessages(newMessages);
    }
}

export {connectSocket, messageReceivedSocket}