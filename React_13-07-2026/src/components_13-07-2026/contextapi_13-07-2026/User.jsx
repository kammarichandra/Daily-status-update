import React, { useContext } from "react";
import { UserContext } from "./UserContext";

let User = () => {
  let { user } = useContext(UserContext);

  return (
    <div>
      <h1>User Details</h1>
      <h2>Name: {user.name}</h2>
      <h3>Age: {user.age}</h3>
      <h3>Role: {user.role}</h3>
    </div>
  );
};

export default User;