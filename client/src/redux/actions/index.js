import {login} from "../../utils/users/userUtils";
import {getChat} from "../../utils/chat/chatUtils";

export const loginAction = (user) => async (dispatch) => {
    let userCredentials = await login(user);
    if (userCredentials.token !== undefined) {
        dispatch({
            type: "LOGIN",
            payload: userCredentials
        });
    } else {
        dispatch({
            type: "LOGIN",
            payload: null
        });
    }
}

export const logoutAction = () => {
    return {
        type: "LOGOUT"
    }
}

export const getChatAction = (user, userId, setMessages) => async (dispatch) => {
    // console.log("action");
    // console.log(setMessages);
    let chat = await getChat(user, userId, setMessages);
    dispatch({
        type: "SET_CHAT",
        payload: chat
    });
}
