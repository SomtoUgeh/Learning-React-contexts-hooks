import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props)=> {
  const [ isAuthenticated, setAuthenticated ] = useState(false);

  const toggleAuthentication = () => {
    setAuthenticated(!isAuthenticated);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuthentication }}>
      {props.children}
    </AuthContext.Provider>
  );

};

export default AuthContextProvider;
