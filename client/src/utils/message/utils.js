import axios from "axios";
const CREATE_MESSAGE_URL = process.env.REACT_APP_CREATE_MESSAGE;
const FETCH_MESSAGES_URL = process.env.REACT_APP_FETCH_MESSAGES;

const createMessage = (e, setMessage, message, chat, authorId) => {
    axios.post(CREATE_MESSAGE_URL, {message, chat, authorId}).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    })
}

const getRecentMessages = (chatId, user, setMessages) => {
    axios.get(FETCH_MESSAGES_URL, {
        params: {chatId},
        headers: {
            "Authorization": user.token
        }
    }).then(data => {
        // console.log(data.data);
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
