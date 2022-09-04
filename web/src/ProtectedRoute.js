import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = (children) => {
    const token = localStorage.getItem("user_data") ? JSON.parse(localStorage.getItem('user_data')).token : ''
    const location = useLocation()
    if (token){
        return children;
    }
    return <Navigate to='/sign-in' state={{ from: location }} replace/>
};

export default ProtectedRoute;