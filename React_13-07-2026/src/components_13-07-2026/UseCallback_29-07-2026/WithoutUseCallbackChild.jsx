import React from "react";

function WithoutUseCallbackChild({ increment }) {

  console.log("WithoutUseCallbackChild Render");

  return (

    <button onClick={increment}> Increase Count </button>

  );

}

export default React.memo(WithoutUseCallbackChild);