import React, { useContext } from "react";
import { AppContext } from "./contrext";

function Header() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <div>
      <h2>Theme: {theme}</h2>

      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default Header;