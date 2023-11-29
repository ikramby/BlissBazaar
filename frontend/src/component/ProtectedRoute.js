

import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext, UseRole } from './AuthContext';

const ProtectedRoute = ({ component: Component, allowedRoles, adminOnly, ...rest }) => {
    const { auth, isAdmin } = useContext(AuthContext);

    useEffect(() => {
        console.log("Authentication State Changed");
        console.log("isAdmin():", isAdmin());
        console.log("auth:", auth);
        // Any other relevant checks or actions
    }, [auth]); // Run this effect when 'auth' changes

    const isAuthorized = () => {
        if (adminOnly) {
            return auth && isAdmin();
        }
        if (allowedRoles) {
            return auth && allowedRoles.includes(UseRole());
        }
        return auth;
    };

    return isAuthorized() ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

