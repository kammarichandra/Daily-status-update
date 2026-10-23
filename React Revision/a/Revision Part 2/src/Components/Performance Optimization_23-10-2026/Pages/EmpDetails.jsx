import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import employees from "../data/Employees";


function EmpDetails() {
  const { id } = useParams();

  const employee = employees.find(
    (employee) => employee.id === Number(id)
  );

  if (!employee) {
    return <h2>Employee Not Found</h2>;
  }

  return (
    <div className="container">
      <h2>Employee Details</h2>

      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Department: {employee.department}</p>
      <p>Salary: ₹{employee.salary}</p>
      <Link to="/performance/employees">Back to Employees</Link>
    </div>
  );
}

export default EmpDetails;