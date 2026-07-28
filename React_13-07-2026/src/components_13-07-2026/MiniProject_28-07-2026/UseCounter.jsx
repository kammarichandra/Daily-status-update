import { useState } from "react";

function useCounter(initialValue = 0) {
    
  let [count, setCount] = useState(initialValue);

  function increment() {
    setCount(count + 1);
  }

  return { count, increment };
}

export default useCounter;