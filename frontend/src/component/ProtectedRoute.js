import React from 'react';
import { Navigate } from 'react-router-dom';
import {  UseRole } from './AuthContext';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ element: Element, allowedRoles, adminOnly, ...rest }) => {
    const { auth,  isAdmin } = useContext(AuthContext);
  

  const isAuthorized = () => {
    if (adminOnly) {
      return auth && isAdmin();
    }
    if (allowedRoles) {
      return auth && allowedRoles.includes(UseRole());
    }
    return auth;
  };
  console.log(isAdmin());
  console.log(auth)
  console.log(isAuthorized())

  return isAuthorized() ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
