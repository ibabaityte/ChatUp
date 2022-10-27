import axios from "axios";
const CREATE_MESSAGE_URL = process.env.REACT_APP_CREATE_MESSAGE;

const createMessage = (e, setMessage, message, chat, authorId) => {
    axios.post(CREATE_MESSAGE_URL, {message, chat, authorId}).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    })
}

export {createMessage}
