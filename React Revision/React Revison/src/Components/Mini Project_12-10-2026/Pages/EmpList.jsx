import { Link } from "react-router-dom";

function EmpList() {
  const employees = [
    { id: 1, name: "Rahul", role: "Developer" },
    { id: 2, name: "Priya", role: "HR" },
    { id: 3, name: "Arjun", role: "Tester" }
  ];

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
          <hr />
        </div>
      ))}

      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
}

export default EmpList;