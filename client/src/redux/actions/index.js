import {login} from "../../utils/users/userUtils";
import io from "socket.io-client";

export const loginAction = (user, navigate) => async (dispatch) => {
    let userCredentials = await login(user, navigate);
    dispatch({
        type: "LOGIN",
        payload: userCredentials
    });
}

export const socketAction = () => {
    const endpoint = process.env.REACT_APP_API_ENDPOINT;
    const socket = io.connect(endpoint);
    return {
        type: "INIT_SOCKET",
        payload: socket
    };
}