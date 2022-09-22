export default (state = null, action) => {
    switch(action.type) {
        case "INIT_SOCKET":
            return action.payload
        default:
            return state;
    }
}