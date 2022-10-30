import axios from "axios";
const MESSAGES_ENDPOINT = process.env.REACT_APP_MESSAGE_ENDPOINT;

const createMessage = (e, setMessage, message, chat, author) => {
    e.preventDefault();
    const {userId, token} = author;
    axios.post(`${MESSAGES_ENDPOINT}/createMessage`, {message, chat, userId}, {
        headers: {
            "Authorization": token
        }
    }).then(result => {
        setMessage("");
        // console.log(result);
    }).catch(err => {
        console.log(err);
    })
}

const getRecentMessages = (chatId, user, setMessages) => {
    axios.get(`${MESSAGES_ENDPOINT}/fetchMessages`, {
        params: {chatId},
        headers: {
            "Authorization": user.token
        }
    }).then(data => {
        setMessages(data.data.reverse());
        // socket.emit("mostRecentMessages", data.data.reverse());
    }).catch(err => {
        // console.log(err);
        // socket.emit("mostRecentMessages", []);
    })
}

export {
    createMessage,
    getRecentMessages
}
