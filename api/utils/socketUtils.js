const joinChat = (room, socket, io) => {
    if(room === undefined) {
        return null;
        // will handle later when front error handling is implemented
    } else {
        socket.join(room.id);
        io.emit("user joined");
    }
}

const deleteChat = (room, socket, io) => {
    if(room === undefined) {
        return null;
        // will handle later when front error handling is implemented
    } else {
        socket.leave(room.id);
        io.emit("chat deleted");
    }
}

export {
    joinChat,
    deleteChat
}
