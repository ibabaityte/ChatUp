import {login, update} from "../../utils/users/userUtils";
import {getChat} from "../../utils/chat/chatUtils";

export const loginAction = (user, errorMsgAction) => async (dispatch) => {
    let userCredentials = await login(user, errorMsgAction);
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
    if (userId === null || userId === undefined) {
        payload = {}
    } else {
        payload = await getChat(user, userId, setMessages);
    }
    dispatch({
        type: "SET_CHAT",
        payload
    });
}

export const updateProfileAction = (e, user, userUpdate, setEditInfo, errorMsgAction, successMsgAction) => async (dispatch) => {
    e.preventDefault();
    let userCredentials = await update(e, user, userUpdate, setEditInfo, errorMsgAction, successMsgAction);
    dispatch({
        type: "UPDATE",
        payload: userCredentials
    });
}

export const errorMsgAction = (msg) => {
    return {
        type: "ERROR",
        payload: msg
    };
}

export const successMsgAction = (msg) => {
    return {
        type: "SUCCESS",
        payload: msg
    };
}

export const infoMsgAction = (msg) => {
    return {
        type: "SUCCESS",
        payload: msg
    };
}

export const clearMsgAction = () => {
    return {
        type: "CLEAR"
    };
}
