import { useMemo, useState } from "react";

function factorial(n) {

  console.log("Calculating factorial...");

  if (n <= 1) return 1;

  return n * factorial(n - 1);
}

function Factorial() {

  let [number, setNumber] = useState(1);
  let [theme, setTheme] = useState(false);

  let result = useMemo(() => factorial(number), [number]);

  return (
    <div>

      <h2>Factorial: {result}</h2>

      <button onClick={() => setNumber(number + 1)}> Increase Number </button>

      <button onClick={() => setTheme(!theme)}> Change Theme </button>

    </div>
  );
}

export default Factorial;