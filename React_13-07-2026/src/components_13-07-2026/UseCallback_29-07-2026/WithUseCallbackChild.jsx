import React from "react";

function WithUseCallbackChild({ increment }) {

  console.log("WithUseCallbackChild Render");

  return (

    <button onClick={increment}> Increase Count </button>

  );
}

export default React.memo(WithUseCallbackChild);