import {combineReducers} from "redux";
import userReducer from "./userReducer";
import chatReducer from "./chatReducer";
import statusMsgReducer from "./statusMsgReducer";

export default combineReducers({
    user: userReducer,
    chat: chatReducer,
    msg: statusMsgReducer
});
