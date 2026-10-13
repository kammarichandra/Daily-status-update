import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../features/Employees/employeeSlice";

function EmployeeApp() {

  // Read data from Redux Store
  const employees = useSelector(
    (state) => state.employees.employees
  );

  // Dispatch actions to Redux Store
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [editingId, setEditingId] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !department.trim()) {
      alert("Please enter all details");
      return;
    }

    if (editingId !== null) {
      dispatch(
        updateEmployee({
          id: editingId,
          name: name.trim(),
          department: department.trim(),
        })
      );

      setEditingId(null);
    } else {
      dispatch(
        addEmployee({
          id: Date.now(),
          name: name.trim(),
          department: department.trim(),
        })
      );
    }

    setName("");
    setDepartment("");
  }

  function handleEdit(employee) {
    setEditingId(employee.id);
    setName(employee.name);
    setDepartment(employee.department);
  }

  function handleCancel() {
    setEditingId(null);
    setName("");
    setDepartment("");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>TeamSync Employee Management</h2>

      <h3>Total Employees: {employees.length}</h3>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Employee Name" value={name} onChange={(e) => setName(e.target.value)}/>

        <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />

        <button type="submit">
          {editingId !== null ? "Update Employee" : "Add Employee"}
        </button>

        {editingId !== null && (
          <button type="button" onClick={handleCancel}> Cancel </button>
        )}
      </form>

      <h3>Employee List</h3>

      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.department}</td>

                <td>
                  <button onClick={() => handleEdit(employee)} > Edit </button>

                  <button onClick={() =>
                      dispatch(deleteEmployee(employee.id))
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmployeeApp;