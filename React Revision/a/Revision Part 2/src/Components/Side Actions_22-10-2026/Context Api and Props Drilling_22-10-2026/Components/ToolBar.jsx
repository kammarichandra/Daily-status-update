
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Toolbar() {
  const { theme } = useContext(AppContext);

  return (
    <div className={`toolbar ${theme}`}>
      <h3>Toolbar Component</h3>
      <p>Current theme: {theme}</p>
    </div>
  );
}

export default Toolbar;
