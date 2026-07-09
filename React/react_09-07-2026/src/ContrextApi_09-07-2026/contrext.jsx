import React, { createContext, useState } from "react";

export let AppContext = createContext();

function AppProvider({ children }) {
  let [theme, setTheme] = useState("Light");
  let [user] = useState("John");
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  let toggleTheme = () => {
    setTheme(theme === "Light" ? "Dark" : "Light");
  };

  let toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        user,
        isLoggedIn,
        toggleTheme,
        toggleLogin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;