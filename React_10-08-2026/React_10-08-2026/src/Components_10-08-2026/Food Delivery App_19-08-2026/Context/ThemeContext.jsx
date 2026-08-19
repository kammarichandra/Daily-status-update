import { createContext, useContext, useState } from "react";

let ThemeContext = createContext();

export function ThemeProvider({ children }) {

  let [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  let toggleTheme = () => {

    setTheme((currentTheme) => {

      let newTheme = currentTheme === "light" ? "dark" : "light";

      localStorage.setItem("theme", newTheme);

      return newTheme;

    });

  };

  return (
    
    <ThemeContext.Provider value={{ theme, toggleTheme }}>

      {children}

    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}