import {login} from "../../utils/users/userUtils";

export const loginAction = (user) => async (dispatch) => {
    let userCredentials = await login(user);
    dispatch({
        type: "LOGIN",
        payload: userCredentials
    });
}