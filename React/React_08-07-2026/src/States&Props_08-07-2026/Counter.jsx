import { useState } from "react";

function Counter() {

  // Creating State
  const [count, setCount] = useState(0);


  function increaseCount() {
    setCount(count + 1);
  }


  function decreaseCount() {
    setCount(count - 1);
  }
  
  return (
    <div>

      <h2>Counter Using State</h2>

      <h3>Count: {count}</h3>


      <button onClick={increaseCount}>
        Increase
      </button>


      <button onClick={decreaseCount}>
        Decrease
      </button>

    </div>
  )
}
