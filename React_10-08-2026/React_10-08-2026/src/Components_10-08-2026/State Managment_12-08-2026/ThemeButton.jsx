import { useTheme } from "./ThemeContext";

function ThemeButton() {
  let { theme, setTheme } = useTheme();

  return (

    <div>

      <p>Current theme: {theme}</p>

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} > Change Theme </button>

    </div>
    
  );
}

export default ThemeButton;