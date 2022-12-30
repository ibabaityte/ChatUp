const statusMsgReducer = (state = {}, action) => {
    switch(action.type) {
        case "ERROR":
            return action.payload
        case "SUCCESS":
            return action.payload
        case "INFO":
            return action.payload
        case "CLEAR":
            return {}
        default:
            return state;
    }
}

export default statusMsgReducer;
