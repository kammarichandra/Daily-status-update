import React from "react";

function Conditional({ isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome User</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Please Login</h1>
      </div>
    );
  }
}

export default Conditional;