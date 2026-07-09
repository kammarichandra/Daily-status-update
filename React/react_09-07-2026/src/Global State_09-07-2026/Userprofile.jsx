import React, { useContext } from "react";
import { UserContext } from "./Usercontext";

function UserProfile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Current User: {user}</p>
      <button onClick={() => setUser("sekhar")}>Change User</button>
    </div>
  );
}

export default UserProfile;