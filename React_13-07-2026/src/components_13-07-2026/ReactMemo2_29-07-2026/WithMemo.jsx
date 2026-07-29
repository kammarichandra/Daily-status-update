import { useState } from "react";
import WithMemoChild from "./WithMemoChild";

function WithMemo() {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("sekhar");

  console.log("Parent Render");

  return (
    <div>
      <h1>Without React.memo()</h1>

      <button onClick={() => setCount(count + 1)}> Increase Count </button><br /><br />

      <button onClick={() => setName(name + "chnadra")}> Change Name </button>

      <WithMemoChild count={count} />
    </div>
  );
}

export default WithMemo;