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

const typingIndicator = (room, io, typingBool) => {
    if(room === undefined) {
        return null;
    } else {
        if(typingBool) {
            io.to(room).emit("typing");
        } else {
            io.to(room).emit("not typing");
        }
    }
}

export {
    joinChat,
    deleteChat,
    typingIndicator
}
