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
    joinChat
}
