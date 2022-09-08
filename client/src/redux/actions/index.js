import {login} from "../../utils/users/userUtils";

export const loginAction = (user, navigate) => async (dispatch) => {
    let userCredentials = await login(user, navigate);
    dispatch({
        type: "LOGIN",
        payload: userCredentials
    });
}