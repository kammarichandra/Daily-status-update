import { useState } from "react";

function WithoutUseMemo() {
  let [count, setCount] = useState(0);
  let [text, setText] = useState("");

  function expensiveCalculation(num) {

    console.log("Calculating...");

    for (let i = 0; i < 1000000000; i++) {

    }
    return num * 2;
  }

  let result = expensiveCalculation(count);

  return (
    <>
      <h2>Result: {result}</h2>

      <button onClick={() => setCount(count + 1)}> Increase </button><br /><br />

      <input value={text} onChange={(e) => setText(e.target.value)} />

    </>
  );
}

export default WithoutUseMemo;