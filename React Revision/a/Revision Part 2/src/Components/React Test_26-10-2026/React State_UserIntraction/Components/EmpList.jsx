
import { useState } from "react";

function EmpList() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Chandra",
      role: "Software Engineer",
      status: "Active",
    },
    {
      id: 2,
      name: "Ravi",
      role: "Frontend Developer",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Priya",
      role: "Backend Developer",
      status: "Active",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter((employee) =>

    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleStatus = (id) => {
    setEmployees((previousEmployees) =>
      previousEmployees.map((employee) =>
        employee.id === id ? {
              ...employee,
              status:
                employee.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : employee
      )
    );
  };

  return (
    <div>
      <h2>Employee List</h2>

      <label htmlFor="employee-search">
        Search Employee
      </label>

      <input id="employee-search" type="text" placeholder="Search by name" value={search}
        onChange={(event) => setSearch(event.target.value) }
      />

      {filteredEmployees.length > 0 ? (
        <ul>
          {filteredEmployees.map((employee) => (
            <li key={employee.id}>
              <h3>{employee.name}</h3>

              <p>Role: {employee.role}</p>

              <p>
                Status:{" "}
                <span>{employee.status}</span>
              </p>

              <button onClick={() =>
                  toggleStatus(employee.id)
                }
              >
                Mark {employee.name}{" "}
                {employee.status === "Active" ? "Inactive" : "Active"}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No employees found</p>
      )}
    </div>
  );
}

export default EmpList;