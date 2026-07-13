import React, { useState } from "react";
import { theamcontext } from "./TheamContext";

let Theamprovider = ({ children }) => {

    let [theme, setTheme] = useState("light");

    let toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
    <theamcontext.Provider
      value={{ theme, toggleTheme }}
    >
      {children}
    </theamcontext.Provider>
  );
}
export default Theamprovider;