import useTheme from "./useTheme";

function Theme() {

  let { theme, toggleTheme } = useTheme();

  return (
    <>
      <h2>{theme}</h2>

      <button onClick={toggleTheme}> Change Theme </button>
    </>
  );
}
export default Theme;