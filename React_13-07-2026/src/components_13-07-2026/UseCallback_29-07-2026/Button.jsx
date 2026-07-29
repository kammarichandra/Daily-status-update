import React from "react";

function Button({ onClick }) {

  console.log("Button Render");

  return (
    <button onClick={onClick}> Increment </button>
  );
}

// export default React.memo(Button);

export default Button;