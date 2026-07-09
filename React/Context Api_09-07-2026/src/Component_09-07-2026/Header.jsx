import React, { useContext } from "react";

import { UserContext } from "../context/UserContext";


function Header() {

  let { user } = useContext(UserContext);


  return (

    <div className="card">

      <h2>
        Header Component
      </h2>


      <p>
        Welcome: {user.name}
      </p>


      <p>
        Status:
        {user.loggedIn ? " Logged In" : " Logged Out"}
      </p>


    </div>

  );

}


export default Header;