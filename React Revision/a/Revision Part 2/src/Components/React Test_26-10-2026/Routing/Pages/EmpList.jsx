import { Link } from "react-router-dom";

const employees = [
  { id: 1, name: "Chandra", role: "Developer" },
  { id: 2, name: "Rahul", role: "Tester" },
  { id: 3, name: "Priya", role: "HR" },
];

function EmpList() {
  return (
    <div>
      <h2>Employee List</h2>

      {employees.map((employee) => (
        <div key={employee.id}>
          <h3>{employee.name}</h3>
          <p>{employee.role}</p>

          <Link to={`/employees/${employee.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default EmpList;