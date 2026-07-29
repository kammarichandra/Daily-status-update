import React from "react";

function WithMemoChild({ count }) {

  console.log("Child Render");

  return (
    <div>
      <h2>Count: {count}</h2>
    </div>
  );
}

export default React.memo(WithMemoChild);