import React from "react";
import { useState, useEffect } from "react";

const defaultAuthValue = {
  isLoggedIn: false,
  profile: {},
  onLogin: () => {},
  onLogout: () => {},
};

const AuthContext = React.createContext(defaultAuthValue);

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const profileInStorage = localStorage.getItem("userProfile");
    if (profileInStorage !== null) {
      setIsLoggedIn(true);
      setProfile(JSON.parse(profileInStorage));
    }
  }, []);

  const onLoginHandler = (authProfile) => {
    if (authProfile) {
      console.log("Login Completed!");
      console.info("AuthProfile is");
      console.log(authProfile);
      localStorage.setItem("userProfile", JSON.stringify(authProfile));
      setIsLoggedIn(true);
      setProfile(authProfile);
    }
  };

  const onLogoutHandler = (authProfile) => {
    console.log("Logout Completed!");
    localStorage.removeItem("userProfile");
    setIsLoggedIn(false);
    setProfile({});
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        profile: profile,
        onLogin: onLoginHandler,
        onLogout: onLogoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
