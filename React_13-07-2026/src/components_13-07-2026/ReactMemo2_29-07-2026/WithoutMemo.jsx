import { useState } from "react";
import WithoutMemoChild from "./WithoutMemoChild";
function WithoutMemo() {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("sekahr");

  console.log("Parent Render");

  return (
    <div>
      <h1>With React.memo()</h1>

      <button onClick={() => setCount(count + 1)}> Increase Count </button><br /><br />

      <button onClick={() => setName(name + "chnadra")}> Change Name </button>

      <WithoutMemoChild count={count} />
    </div>
  );
}

export default WithoutMemo;