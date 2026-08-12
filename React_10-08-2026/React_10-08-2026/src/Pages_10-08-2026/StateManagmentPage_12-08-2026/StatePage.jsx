import ThemeButton from "../../Components_10-08-2026/State Managment_12-08-2026/ThemeButton";
import ThemeProvider from "../../Components_10-08-2026/State Managment_12-08-2026/ThemeContext";
import Counter from "../../Components_10-08-2026/State Managment_12-08-2026/Counter";
function StatePage() {
  return (
    <ThemeProvider>
      <ThemeButton />
      <hr />
      <Counter/>
    </ThemeProvider>
  );
}

export default StatePage;