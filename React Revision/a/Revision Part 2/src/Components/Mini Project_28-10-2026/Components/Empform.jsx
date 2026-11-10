import { useState } from "react";
import { useEmployees } from "../Context/EmpContext";



function Empform() {
  const { dispatch } = useEmployees();

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const employee = {
      id: Date.now(),
      name,
      department,
      salary: Number(salary),
    };

    dispatch({
      type: "ADD",
      payload: employee,
    });

    setName("");
    setDepartment("");
    setSalary("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>

      <input
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        required
      />

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default Empform;