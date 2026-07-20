import React from "react";

function Ternary({ isLoggedIn }) {
  return (
    <div>
      <h2>{isLoggedIn ? "Welcome User" : "Please Login"}</h2>
    </div>
  );
}

export default Ternary;