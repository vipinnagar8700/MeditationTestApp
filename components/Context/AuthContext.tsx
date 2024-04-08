// context/AuthContext.js
import React, { createContext, useEffect, useState } from 'react';
import { fetchUserData } from './Auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const user = await fetchUserData();
      console.log(user,"useruser")
      setUserData(user?.user);
    };
    fetchData();
  }, []);

  return (
    <AuthContext.Provider value={{ userData }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
