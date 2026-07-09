import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Header() {

  const { theme } = useContext(AppContext);

  return (

    <div className="card">

      <h2>Header</h2>

      <h3>Current Theme : {theme}</h3>

    </div>

  );

}

export default Header;