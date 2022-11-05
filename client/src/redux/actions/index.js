import {login, update} from "../../utils/users/userUtils";
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
    let payload;
    if(userId === null || userId === undefined) {
        payload = {}
    } else {
        payload = await getChat(user, userId, setMessages);
    }
    dispatch({
        type: "SET_CHAT",
        payload
    });
}

export const updateProfileAction = (e, user, userUpdate, setEditInfo) => async (dispatch) => {
    e.preventDefault();
    let userCredentials = await update(e, user, userUpdate);
    if (userCredentials.token !== undefined) {
        dispatch({
            type: "UPDATE",
            payload: userCredentials
        });
    } else {
        dispatch({
            type: "UPDATE",
            payload: null
        });
    }
    setEditInfo(false);
}

