import axios from "axios";

const getRecentMessages = (socket, id, user) => {
    axios.get("http://localhost:8080/messages/fetchMessages", {
        params: {
            chatId: id
        },
        headers: {
            "Authorization": user.token
        }
    }).then(data => {
        socket.emit("mostRecentMessages", data.data.reverse());
    }).catch(err => {
        console.log(err);
        socket.emit("mostRecentMessages", []);
    })
}

const joinChat = (room, socket, io) => {
    if(room === undefined) {
        return null;
        // will handle later when front error handling is implemented
    } else {
        socket.join(room.id);
        //dont use it in the front yet
        // io.emit("user joined", "user joined");
    }
}

export {
    getRecentMessages,
    joinChat
}
