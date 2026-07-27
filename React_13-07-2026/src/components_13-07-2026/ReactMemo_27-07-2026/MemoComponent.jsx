import React, { useState } from "react";

let Child1 = React.memo(function Child1({ name }) {

  console.log("memo Rendered");

  return <h2>{name}</h2>;

});


function Parent1() {

  let [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Count1  </button>

      <Child1 name="sekhar" />
    </div>
  );
}

export default Parent1;