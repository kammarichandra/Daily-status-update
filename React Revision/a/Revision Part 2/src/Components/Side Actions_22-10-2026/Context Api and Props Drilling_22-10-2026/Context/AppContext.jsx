
import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((previous) =>
      previous === "light" ? "dark" : "light"
    );
  }

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}
