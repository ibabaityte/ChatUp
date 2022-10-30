import {connect} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";

// util imports
import {mapUserToProps} from "../redux/reduxUtils";

const PublicRoutes = (props) => {
    const {user} = props;
    return user === null ? <Outlet/> : <Navigate to="/messenger"/>
}

export default connect(mapUserToProps)(PublicRoutes);
