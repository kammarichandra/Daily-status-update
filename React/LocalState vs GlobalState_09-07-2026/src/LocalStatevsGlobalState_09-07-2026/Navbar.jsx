import React, { useContext } from "react";
import { AppContext } from "../Contrext_09-07-2026/Appcontext";


function Navbar() {

  let { user, theme } = useContext(AppContext);


  return (

    <div>

      <h2>Navbar</h2>

      <p>
        User: {user}
      </p>

      <p>
        Theme: {theme}
      </p>

    </div>

  );
}


export default Navbar;