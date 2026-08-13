import React from "react";

let UsecallbackChild = React.memo(function Child({ onClick }) {
  console.log("use callback Child rendered");

  return (
    <button onClick={onClick}>
      Click Child
    </button>
  );
});

export default UsecallbackChild;