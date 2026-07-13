import React , {useContext} from "react";
import { UserContext } from "./UserContext";


let Navbar = () => {


  let { user } = useContext(UserContext);


  return (

    <div>

      <h2>
        Welcome, {user.name}
      </h2>

    </div>

  );

};


export default Navbar;