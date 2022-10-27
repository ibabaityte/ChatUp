import {connect} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";

const PublicRoutes = (props) => {
    const {user} = props;
    return user === null ? <Outlet/> : <Navigate to="/messenger"/>
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(PublicRoutes);
