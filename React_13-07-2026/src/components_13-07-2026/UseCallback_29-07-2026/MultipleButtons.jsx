import { useState, useCallback } from "react";
import Button from "./Button";

function MultipleButtons() {
  let [count, setCount] = useState(0);
  let [theme, setTheme] = useState(true);

  let increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <h2>{count}</h2>

      <Button onClick={increment} />

      <button onClick={() => setTheme(!theme)}> Toggle Theme </button>
    </div>
  );
}

export default MultipleButtons;