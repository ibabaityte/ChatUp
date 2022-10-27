import io from "socket.io-client";
const endpoint = process.env.REACT_APP_API_ENDPOINT;

const connectSocket = (socket, chatId) => {
    socket.emit("join chat", {id: chatId});
}

const messageReceived = (message, messages, setMessages) => {
    try {
        if(messages !== []) {
            const newMessages = [...messages, message];
            setMessages(newMessages);
        }
    } catch (err) {
        console.log(err);
    }
}

export const socket = io.connect(endpoint);

export {connectSocket, messageReceived}
