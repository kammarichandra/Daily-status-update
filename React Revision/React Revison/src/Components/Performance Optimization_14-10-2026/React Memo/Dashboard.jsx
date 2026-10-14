import { useState } from "react";
import Empcard from "./Empcard";

function Dashboard() {
  const [count, setCount] = useState(0);
  const [employee, setEmployee] = useState({
    id: 1,
    department: "Engineering",
  });

  console.log("Dashboard rendered");

  return (
    <div>
      <h2>TeamSync Dashboard</h2>

      <p>Counter: {count}</p>

      <button onClick={() => setCount((c) => c + 1)}>
        Increment Counter
      </button>

      <button onClick={() => setEmployee((prev) => ({ ...prev }))} >
        Create New Employee Object
      </button>

      <Empcard
        name="Rahul"
        role="Developer"
        employee={employee}
      />
    </div>
  );
}

export default Dashboard;