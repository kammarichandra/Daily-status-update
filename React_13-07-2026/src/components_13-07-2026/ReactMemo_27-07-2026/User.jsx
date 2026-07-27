import React from "react";

function User({ user }) {

  console.log("User Rendered");

  return (
    <div>
      <h2>Name: {user.name}</h2>
    </div>
  );
}

export default User;