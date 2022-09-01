const INITIAL_STATE = {
    email: null,
    password: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "LOGIN":
            return action.payload
        default:
            return state;
    }
}