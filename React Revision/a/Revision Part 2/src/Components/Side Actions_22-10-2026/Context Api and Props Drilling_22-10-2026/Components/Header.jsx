import { useContext } from "react";
import { AppContext } from "../Context/AppContext";


function Header() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <header className={`header ${theme}`}>
      <h2>My React App</h2>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;
