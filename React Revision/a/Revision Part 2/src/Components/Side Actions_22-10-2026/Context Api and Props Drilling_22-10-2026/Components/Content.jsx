
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Content() {
  const { theme } = useContext(AppContext);

  return (
    <main className={`content ${theme}`}>
      <h2>Welcome to React!</h2>
      <p>
        This component reads the theme directly from Context API.
      </p>
      <p>No theme props are required.</p>
    </main>
  );
}

export default Content;
