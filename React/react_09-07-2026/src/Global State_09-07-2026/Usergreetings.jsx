import React, { useContext } from "react";
import { UserContext } from "./Usercontext";

function UserGreeting() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Welcome, {user}!</h2>
    </div>
  );
}

export default UserGreeting;