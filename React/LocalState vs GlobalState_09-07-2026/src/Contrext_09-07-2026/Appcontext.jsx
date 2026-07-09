import React, { createContext, useState } from "react";


export let AppContext = createContext();


function AppProvider({ children }) {

  let [user, setUser] = useState("chnadra");

  let [theme, setTheme] = useState("Light");


  let changeUser = () => {
    setUser("sekar");
  };


  let changeTheme = () => {
    setTheme(
      theme === "Light" ? "Dark" : "Light"
    );
  };


  return (

    <AppContext.Provider
      value={{
        user,
        theme,
        changeUser,
        changeTheme
      }}
    >

      {children}

    </AppContext.Provider>

  );
}


export default AppProvider;