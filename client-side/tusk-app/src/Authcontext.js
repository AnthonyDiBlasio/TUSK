// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []); // Run only on mount

  const updateLoginStatus = (status) => {
    console.log('Updating login status:', status);
    setIsLoggedIn(status);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, updateLoginStatus }}>
      {children}
    </AuthContext.Provider>
  );
};
