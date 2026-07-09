import React, { useContext } from "react";
import { AppContext } from "./contrext";

function Profile() {
  const { user, isLoggedIn, toggleLogin } = useContext(AppContext);

  return (
    <div>
      <h2>User: {user}</h2>

      <h3>
        Status: {isLoggedIn ? "Logged In" : "Logged Out"}
      </h3>

      <button onClick={toggleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Profile;