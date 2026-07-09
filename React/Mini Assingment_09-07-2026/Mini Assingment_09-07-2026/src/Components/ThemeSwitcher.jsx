import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ThemeSwitcher() {

  const { toggleTheme } = useContext(AppContext);

  return (

    <div className="card">

      <h2>Theme Switcher</h2>

      <button onClick={toggleTheme}>
        Switch Theme
      </button>

    </div>

  );

}

export default ThemeSwitcher;