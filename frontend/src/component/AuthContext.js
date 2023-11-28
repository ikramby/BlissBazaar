import React, { createContext, useState, useContext, useEffect } from 'react';
import jwt_decode from 'jsonwebtoken/decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [email, setEmail] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedFirstName = localStorage.getItem("firstName");
    const savedLastName = localStorage.getItem("lastName");
    console.log("FirstName in Context: ", firstName);
    console.log("lastName in Context: ", lastName);


  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token:', token);

    if (token) {
      const decoded = jwt_decode(token);
      console.log('Decoded Token:', decoded);
      setEmail(decoded.email);
      setAuth(true);

      setFirstName(savedFirstName || "");
      setLastName(savedLastName || "");

      setUserRole(decoded.role);

    } else {
      setAuth(false);
    }

  }, [firstName, lastName]);

  const login = (token, userEmail, userFirstName, userLastName) => {
    // Store the token in local storage and mark the user as authenticated
    localStorage.setItem("token", token);
    setEmail(userEmail);
    setFirstName(userFirstName);
    setLastName(userLastName);

  }, []);
  

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

    setFirstName("");
    setLastName("");
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        email,
        setEmail,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        login,
        logout,
      }}
    >

    setUserRole(null);
    console.log('Logged out');
  };
  const isAdmin = () => {
    const token = localStorage.getItem('token');
    if (token) {
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
