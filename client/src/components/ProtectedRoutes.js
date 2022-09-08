import React from "react";
import {Navigate, Outlet} from 'react-router-dom';
import {connect} from "react-redux";

const ProtectedRoutes = (props) => {

    const {user} = props;

    return user.email !== null ? <Outlet/> : <Navigate to="/"/>
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(ProtectedRoutes);