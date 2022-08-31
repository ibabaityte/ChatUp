const sendMessage = (e, setMessage, setMessages, message, messages, socket) => {
    e.preventDefault();
    socket.emit("new message", {id: "1", message});
    const newMessages = [...messages, message];
    setMessages(newMessages);
    setMessage("");
}

export {sendMessage}