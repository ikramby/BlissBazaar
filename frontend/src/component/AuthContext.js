import React, { createContext, useState, useContext, useEffect } from 'react';
import jwt_decode from 'jsonwebtoken/decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [userRole, setUserRole] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    if (token) {
      const decoded = jwt_decode(token);
      console.log('Decoded Token:', decoded);
      setEmail(decoded.email);
      setAuth(true);
      setUserRole(decoded.role);
    } else {
      setAuth(false);
    }
  }, [token]);
  

  const login = (token, userEmail) => {
    localStorage.setItem('token', token);
    console.log('Token stored:', token);
    const decoded = jwt_decode(token);
    setEmail(decoded.email);
    setAuth(true);
    setUserRole(decoded.role); // Assuming the role is in the token
  };

  const logout = () => {
    localStorage.removeItem('token');
    setEmail('');
    setAuth(false);
    setUserRole(null);
    console.log('Logged out');
  };
  const isAdmin = () => {
    const token = localStorage.getItem('token');
    if (token && auth) {
      const decoded = jwt_decode(token);
   
      return decoded.email === 'admin@gmail.com'; // Assuming the role is stored in the token
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, email, login, logout, userRole, isAdmin  }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const useIsAdmin = () => {
  const { email } = useAuth();
  const adminEmails = ['admin@gmail.com']; // Define admin emails
  return adminEmails.includes(email);
};

export const UseRole = () => {
  const { userRole } = useAuth();
  return userRole;
};