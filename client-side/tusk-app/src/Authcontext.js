// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // Add user state

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    setIsLoggedIn(!!storedToken);
    setUser(storedUser);
  }, []); // Run only on mount

  const updateLoginStatus = (status, userData = null) => {
    console.log('Updating login status:', status);
    setIsLoggedIn(status);

    if (userData) {
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } else {
      setUser(null);
      localStorage.removeItem('user');
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, updateLoginStatus }}>
      {children}
    </AuthContext.Provider>
  );
};
