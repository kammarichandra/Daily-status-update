import { useState } from "react";
import Header1 from "./Header1";
import EmpList from "./EmpList";


function Dashboard() {
  console.log("Dashboard rendered");

  const [count, setCount] = useState(0);

  return (
    <div>
      <Header1 />

      <main>
        <h2>Dashboard</h2>

        <p>Counter: {count}</p>

        <button onClick={() => setCount(count + 1)}> Increment </button>

        <button onClick={() => setCount(count - 1)}> Decrement </button>

        <button onClick={() => setCount(0)}>reset</button>
        <EmpList />
      </main>
    </div>
  );
}

export default Dashboard;