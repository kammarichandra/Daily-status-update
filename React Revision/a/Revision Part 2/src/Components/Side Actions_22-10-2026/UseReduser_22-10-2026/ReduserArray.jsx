
import { useContext, useState } from "react";
import { EmployeeContext, EmployeeProvider } from "./EmployeeContext";


function EmployeeList() {
  const { employees, dispatch } = useContext(EmployeeContext);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  function addEmployee(e) {
    e.preventDefault();

    if (!name.trim() || !role.trim()) return;

    dispatch({
      type: "ADD_EMPLOYEE",
      payload: {
        id: Date.now(),
        name: name.trim(),
        role: role.trim(),
      },
    });

    setName("");
    setRole("");
  }

  function updateEmployee(employee) {
    const newName = prompt("Enter new employee name:", employee.name);

    if (newName && newName.trim()) {
      dispatch({
        type: "UPDATE_EMPLOYEE",
        payload: {
          id: employee.id,
          name: newName.trim(),
        },
      });
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Management</h1>

      <form onSubmit={addEmployee}>
        
        <input placeholder="Employee name" value={name} onChange={(e) => setName(e.target.value)} required />

        <input placeholder="Employee role" value={role} onChange={(e) => setRole(e.target.value)} required />

        <button type="submit">Add Employee</button>
      </form>

      <button
        onClick={() =>
          dispatch({ type: "RESET_EMPLOYEES" })
        }
      >
        Reset Employees
      </button>

      {employees.map((employee) => (
        <div
          key={employee.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <h3>{employee.name}</h3>
          <p>{employee.role}</p>

          <button onClick={() => updateEmployee(employee)}>
            Update
          </button>

          <button
            onClick={() =>
              dispatch({
                type: "DELETE_EMPLOYEE",
                payload: employee.id,
              })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

function ReduserArray() {
  return (
    <EmployeeProvider>
      <EmployeeList />
    </EmployeeProvider>
  );
}

export default ReduserArray;
