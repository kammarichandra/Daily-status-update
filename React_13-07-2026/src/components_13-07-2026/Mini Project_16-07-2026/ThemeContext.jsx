import { createContext, useState } from "react";


export let ThemeContext = createContext();

export function ThemeProvider({ children }) {

    let [theme, setTheme] = useState("light");

    function toggleTheme() {
        setTheme((prev) =>
            prev === "light" ? "dark" : "light"
        );
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}