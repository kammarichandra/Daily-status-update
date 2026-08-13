import React, { useState, useMemo } from 'react'

function Usememo() {
    const [number, setNumber] = useState(10);
    const [count, setCount] = useState(0);

    const square = useMemo(() => {
        console.log("calculating square...");
        return number * number;
    }, [number]);

  return (
     <div>
      <h2>useMemo()</h2>

      <p>Number: {number}</p>
      <p>Square: {square}</p>
      <p>Count: {count}</p>

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  )
}

export default Usememo