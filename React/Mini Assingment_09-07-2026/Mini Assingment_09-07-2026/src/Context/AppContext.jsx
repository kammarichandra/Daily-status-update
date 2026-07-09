import { createContext, useState } from "react";

export let AppContext = createContext();

function AppProvider({ children }) {

  let [theme, setTheme] = useState("light");

  let [user, setUser] = useState({
    name: "chnadra",
    email: "chnadra@gmail.com"
  });

  let toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  let changeUser = () => {
    setUser({
      name: "sekhar",
      email: "sekhar@gmail.com"
    });
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        user,
        changeUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;