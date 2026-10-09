import { useState } from "react";
import EmployeeCard from "./EmployeeCard";

export default function EmployeeList({
  employees,
  onEdit,
  onDelete
}) {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const departments = [ "All", ...new Set(employees.map(emp => emp.department)) ];

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch =
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" ||
      emp.department === department;

    return matchesSearch && matchesDepartment;
  });

  return (
    <section className="list-section">
      <h2>Employees</h2>

      <div className="filters">
        <input
          placeholder="Search name or email..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select
          value={department}
          onChange={e => setDepartment(e.target.value)}
        >
          {departments.map(dep => (
            <option key={dep} value={dep}>{dep}</option>
          ))}
        </select>
      </div>

      {filteredEmployees.length === 0 ? (
        <p className="empty">
          No employees match your search.
        </p>
      ) : (
        <div className="employee-grid">
          {filteredEmployees.map(employee => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}