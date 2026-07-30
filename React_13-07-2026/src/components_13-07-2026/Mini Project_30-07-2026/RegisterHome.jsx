import { useState } from "react";
import Register from "./Register";

function RegisterHome() {
  const [open, setopen] = useState(false);

  return (
    <div className="container">
      <h1>Employee Management System</h1>

      <button onClick={() => setopen(true)}>
        Create Employee
      </button>

      {open && (
        <Register close={() => setopen(false)} />
      )}
    </div>
  );
}

export default RegisterHome;