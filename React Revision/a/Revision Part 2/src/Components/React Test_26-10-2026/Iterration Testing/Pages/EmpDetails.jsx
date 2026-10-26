import { useContext } from "react";
import { useParams } from "react-router-dom";
import { EmployeeContext } from "../Context/EmpContext";

function EmpDetails() {
    
  const { id } = useParams();

  const { employees } = useContext(EmployeeContext);

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
    </div>
  );
}

export default EmpDetails;