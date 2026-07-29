import { useState, useCallback } from "react";
import WithUseCallbackChild from "./WithUseCallbackChild";

function WithUseCallback() {

  let [count, setCount] = useState(0);
  let [theme, setTheme] = useState("Dark");

  let increment = useCallback(() => {

    console.log("Increment Function");

    setCount((prevCount) => prevCount + 1);

  }, []);
  
console.log("Parent Render");

  
  return (

    <div>

      <h2>Count: {count}</h2>

      <button onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}> Change Theme </button>

      <WithUseCallbackChild increment={increment} />

    </div>

  );
}

export default WithUseCallback;