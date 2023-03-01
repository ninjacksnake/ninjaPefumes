import React, { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = "/profile";
  console.log("location state ", location.state);
  //  location.state?.path || "/profile";
  const [user, setUser] = useState({
    userName: "",
    permissions: [],
  });

  const login = (user) => {
    if (user === "admin") {
      setUser({ userName: user, permissions: ["view_extra"] });
    } else {
      setUser({ userName: user, permissions: ["view_extra"] });
    }
    navigate(redirectPath, { replace: true });
  };

  const logOut = () => {
    setUser({ userName: "", permissions: [] });
  };

  return (
    <AuthContext.Provider value={{ user, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};


