import { useParams } from "react-router-dom";

import { useEmployees } from "../context/EmployeeContext";
import Navbar from "../Components/Navbar";

function EmployeeDetails3() {
  const { id } = useParams();

  const { employees } = useEmployees();

  const employee = employees.find(
    (employee) => employee.id === Number(id)
  );

  if (!employee) {
    return <h2>Employee Not Found</h2>;
  }

  return (
    <div>
      <Navbar />

      <h2>Employee Details</h2>

      <p>ID: {employee.id}</p>

      <p>Name: {employee.name}</p>

      <p>Department: {employee.department}</p>

      <p>Salary: ₹{employee.salary}</p>
    </div>
  );
}

export default EmployeeDetails3;