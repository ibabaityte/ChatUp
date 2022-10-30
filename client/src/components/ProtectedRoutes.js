import {Navigate, Outlet} from 'react-router-dom';
import {connect} from "react-redux";
import {mapUserToProps} from "../redux/reduxUtils";

const ProtectedRoutes = (props) => {
    const {user} = props;
    return user === null ? <Navigate to="/"/> : <Outlet/>
}

export default connect(mapUserToProps)(ProtectedRoutes);
