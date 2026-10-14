import { useState, useCallback } from "react";
import EmpCard from "./EmpCard";

const initialEmployees = [
  {
    id: 1,
    name: "Rahul",
    department: "IT",
    salary: 50000,
    status: "Active",
  },
  {
    id: 2,
    name: "Priya",
    department: "HR",
    salary: 60000,
    status: "Active",
  },
  {
    id: 3,
    name: "Arun",
    department: "Finance",
    salary: 70000,
    status: "Inactive",
  },
];

function EmpDashboard() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [counter, setCounter] = useState(0);
  const [editingId, setEditingId] = useState(null);

  console.log("EmployeeDashboard rendered");

  // Stable reference: does not depend on employee state.
  const handleEdit = useCallback((id) => {
    setEditingId(id);
  }, []);

  // Functional state update avoids stale employee data.
  const handleDelete = useCallback((id) => {
    setEmployees((previousEmployees) =>
      previousEmployees.filter(
        (employee) => employee.id !== id
      )
    );

    setEditingId((previousId) =>
      previousId === id ? null : previousId
    );
  }, []);

  const handleStatusChange = useCallback((id) => {
    setEmployees((previousEmployees) =>
      previousEmployees.map((employee) =>
        employee.id === id
          ? {
              ...employee,
              status:
                employee.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : employee
      )
    );
  }, []);

  return (
    <div className="dashboard">
      <h1>TeamSync Employee Management</h1>

      <p>Counter: {counter}</p>

      <button onClick={() => setCounter((c) => c + 1)}> Increment Unrelated Counter </button>

      {editingId !== null && (
        <p>
          Editing employee ID: {editingId}
          <button onClick={() => setEditingId(null)}> Cancel </button>
        </p>
      )}

      <div className="employee-list">
        {employees.map((employee) => (
          <EmpCard
            key={employee.id}
            employee={employee}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>
    </div>
  );
}

export default EmpDashboard;