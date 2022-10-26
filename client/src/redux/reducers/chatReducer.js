const chatReducer = (state = {}, action) => {
    switch(action.type) {
        case "SET_CHAT":
            return action.payload
        case "LOGOUT":
            return {}
        default :
            return state;
    }
}

export default chatReducer;
