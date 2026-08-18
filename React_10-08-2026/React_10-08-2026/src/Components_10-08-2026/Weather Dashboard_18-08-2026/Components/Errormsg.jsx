import React from "react";

function Errormsg({ message }) {

  return (
    <div className="error">
      <p>❌ {message}</p>
    </div>
  );
}

export default Errormsg;