const INITIAL_STATE = null;

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "LOGIN":
            return action.payload
        case "UPDATE":
            return action.payload
        case "LOGOUT":
            return INITIAL_STATE
        default:
            return state;
    }
}

export default userReducer;
