import { useState } from "react";
import WithoutUseCallbackChild from "./WithoutUseCallbackChild";

function WithoutUseCallback() {

  let [count, setCount] = useState(0);
  let [theme, setTheme] = useState("Light");

  let increment = () => {
    console.log("Increment Function");
    setCount(count + 1);
  };

  console.log("Parent Render");

  return (
    <div>

      <h2>Count: {count}</h2>

      <button onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}> Change Theme </button>

      <WithoutUseCallbackChild increment={increment} />

    </div>
  );
  
}

export default WithoutUseCallback;