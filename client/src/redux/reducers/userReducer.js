const INITIAL_STATE = {
    email: null,
    password: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "LOGIN":
            return action.payload
        case "LOGOUT":
            return INITIAL_STATE
        default:
            return state;
    }
}

export default userReducer;
