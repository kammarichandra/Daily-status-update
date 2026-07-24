import React, { useState } from "react";

function ConditionalRender() {
  let [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      {isLoggedIn ? <h2>Welcome User!</h2> : <h2>Please Login</h2>}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login
      </button>
    </div>
  );
}

export default ConditionalRender;