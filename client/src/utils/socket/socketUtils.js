const connectSocket = (socket, chatId) => {
    socket.emit("join chat", {id: chatId});
}

const messageReceivedSocket = (message, messages, setMessages) => {
    console.log(message);
    console.log(messages);
    // console.log(newMessages);
    if(messages === []) {
        console.log("eina nx");
    } else {
        const newMessages = [...messages, message];
        setMessages(newMessages);
    }
    console.log(messages);
}

export {connectSocket, messageReceivedSocket}