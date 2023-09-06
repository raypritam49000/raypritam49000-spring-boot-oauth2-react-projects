import React from 'react';
import {Navigate, Outlet} from "react-router-dom";


const PrivateRoute = ({authenticated}) => {
    return authenticated ? <Outlet/> : <Navigate to="/login" replace={true}/>;
};

export default PrivateRoute;