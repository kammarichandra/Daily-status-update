import { useParams } from "react-router-dom";
import useEmp from "../Hooks/UseEmp";


function EmpDetails() {
  const { id } = useParams();
  const { employees } = useEmp();

  const employee = employees.find(
    (emp) => emp.id === Number(id)
  );

  if (!employee) {
    return <h2>Employee Not Found</h2>;
  }

  return (
    <div>
      <h2>Employee Details</h2>

      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Email: {employee.email}</p>
      <p>Department: {employee.department}</p>
    </div>
  );
}

export default EmpDetails;