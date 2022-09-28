import {connect} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";

const PublicRoutes = (props) => {
    const {user} = props;
    return user.email !== null ? <Navigate to="/messenger"/> : <Outlet/>
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(PublicRoutes);