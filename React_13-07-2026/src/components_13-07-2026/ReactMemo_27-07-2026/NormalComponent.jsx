import React, { useState } from "react";

function Child({ name }) {
  console.log("normal Rendered");

  return <h2>{name}</h2>;
}

function Parent() {
    
  let [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Count </button>

      <Child name="chandra" />
    </div>
  );
}

export default Parent;