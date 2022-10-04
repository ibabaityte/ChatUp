import {login} from "../../utils/users/userUtils";
import {getChat} from "../../utils/chat/chatUtils";

export const loginAction = (user) => async (dispatch) => {
    let userCredentials = await login(user);
    if (userCredentials.token !== undefined) {
        dispatch({
            type: "LOGIN",
            payload: userCredentials
        });
    }
}

export const getChatAction = (user, userId) => async (dispatch) =>{
    let chat = await getChat(user, userId);
    dispatch({
        type: "SET_CHAT",
        payload: chat
    });
}
