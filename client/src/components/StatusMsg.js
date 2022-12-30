import {useEffect, useState} from "react";
import {connect} from "react-redux";

// util imports
import {mapStatusMsgToProps} from "../redux/reduxUtils";
import {clearMsgAction} from "../redux/actions";

// style imports
import MuiAlert from '@mui/material/Alert';

const StatusMsg = (props) => {

    const {
        msg,
        clearMsgAction
    } = props;

    const [msgSeverity, setMsgSeverity] = useState();

    useEffect(() => {
        if (msg.code) {
            // setting the color of the message
            if (msg.code === 200) {
                setMsgSeverity("success")
            } else {
                setMsgSeverity("error")
            }

            // message should disappear after 20 sec
            let timeout = setTimeout(() => clearMsgAction(), 20000);
            return () => {
                clearTimeout(timeout);
            }
        }
    }, [msg])

    return (
        <div>
            {
                msg.code ?
                    <MuiAlert sx={{margin: "7px 0"}} elevation={6} variant="filled" severity={msgSeverity}>{msg.msg}</MuiAlert>
                    :
                    null
            }
        </div>
    );
}

export default connect(mapStatusMsgToProps, {clearMsgAction})(StatusMsg);
