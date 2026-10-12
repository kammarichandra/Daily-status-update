import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AddEmp() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const employee = { name, role };

    console.log("New Employee:", employee);
    alert("Employee added successfully!");

    navigate("/employees");
  }

  return (
    <div>
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="text"
          placeholder="Employee Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Add Employee</button>
      </form>

      <br />
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
}

export default AddEmp;