import React, { useContext } from "react";

import { UserContext } from "../../context/UserContext";


function UserDetails() {


  const {
    user,
    loginUser,
    logoutUser,
    changeName

  } = useContext(UserContext);



  return (

    <div className="nested-card">


      <h3>
        User Details
      </h3>


      <p>
        Name: {user.name}
      </p>


      <p>
        Role: {user.role}
      </p>


      <button onClick={changeName}>
        Change Name
      </button>


      {
        user.loggedIn ?

        (
          <button onClick={logoutUser}>
            Logout
          </button>
        )

        :

        (
          <button onClick={loginUser}>
            Login
          </button>
        )

      }


    </div>

  );

}


export default UserDetails;