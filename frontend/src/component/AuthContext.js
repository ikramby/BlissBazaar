// AuthContext.js
import React, { createContext, useState, useEffect } from "react";

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

    if (token) {
      // If a token exists in local storage, consider the user authenticated
      setAuth(true);
      setFirstName(savedFirstName || "");
      setLastName(savedLastName || "");
    } else {
      // If no token exists, the user is not authenticated
      setAuth(false);
    }
  }, [firstName, lastName]);

  const login = (token, userEmail, userFirstName, userLastName) => {
    // Store the token in local storage and mark the user as authenticated
    localStorage.setItem("token", token);
    setEmail(userEmail);
    setFirstName(userFirstName);
    setLastName(userLastName);
    setAuth(true);
  };

  const logout = () => {
    // Remove the token from local storage and mark the user as not authenticated
    localStorage.removeItem("token");
    setEmail("");
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
      {children}
    </AuthContext.Provider>
  );
};
