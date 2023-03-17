import { createContext, useState } from "react";

export const AuthContext = createContext();

// import React from "react";

const AuthContextProvider = ({ children }) => {

  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("token") ? true : false
  );
  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
