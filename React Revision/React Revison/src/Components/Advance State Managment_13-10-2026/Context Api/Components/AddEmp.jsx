import { useState } from "react";
import { useEmployees } from "../Context/EmpContext";

function AddEmp() {
  const { dispatch } = useEmployees();

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !department.trim()) {
      alert("Please enter all details");
      return;
    }

    dispatch({
      type: "ADD_EMPLOYEE",
      payload: {
        id: Date.now(),
        name: name.trim(),
        department: department.trim(),
      },
    });

    setName("");
    setDepartment("");
  }

  return (
    <div>
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        
        <input type="text" placeholder="Employee Name" value={name} onChange={(e) => setName(e.target.value)} />

        <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />

        <button type="submit">Add Employee</button>

      </form>
    </div>
  );
}

export default AddEmp;