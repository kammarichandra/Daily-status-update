import { useContext } from "react";
import { ThemeProvider,ThemeContext,} from "../../components_13-07-2026/UseContext_16-07-2026/ThemeContext";
import Home from "../../components_13-07-2026/UseContext_16-07-2026/Home";

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Home />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;