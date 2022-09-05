const connectSocket = (socket, chatId) => {
    socket.emit("join chat", {id: chatId});
}

const messageReceivedSocket = (message, messages, setMessages) => {
    try {
        if(messages !== []) {
            const newMessages = [...messages, message];
            setMessages(newMessages);
        }
    } catch (err) {
        console.log(err);
    }
}

export {connectSocket, messageReceivedSocket}