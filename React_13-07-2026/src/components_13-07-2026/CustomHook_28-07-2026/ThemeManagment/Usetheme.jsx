import { useState } from "react";

function useTheme() {

  let [theme, setTheme] = useState("light");

  let toggleTheme = () => {

    setTheme(theme === "light" ? "dark" : "light");
    
  };

  return {
    theme,
    toggleTheme
  };
}

export default useTheme;