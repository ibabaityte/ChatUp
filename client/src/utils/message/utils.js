const sendMessage = (e, setMessage, setMessages, message, messages, socket, chat, authorId) => {
    e.preventDefault();
    socket.emit("new message", {chatId: chat._id, authorId, message, messages});
    setMessage("");
}

export {sendMessage}