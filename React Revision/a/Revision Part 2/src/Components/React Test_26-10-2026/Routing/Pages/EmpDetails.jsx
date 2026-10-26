import { useParams, Link } from "react-router-dom";

const employees = [
  { id: 1, name: "Chandra", role: "Developer" },
  { id: 2, name: "Rahul", role: "Tester" },
  { id: 3, name: "Priya", role: "HR" },
];

function EmpDetails() {
  const { id } = useParams();

  const employee = employees.find(
    (emp) => emp.id === Number(id)
  );

  if (!employee) {
    return <h2>Employee Not Found</h2>;
  }

  return (
    <div>
      <h2>Employee Details</h2>

      <p>Name: {employee.name}</p>
      <p>Role: {employee.role}</p>

      <Link to="/employees">
        Back to Employee List
      </Link>
    </div>
  );
}

export default EmpDetails;