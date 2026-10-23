import { memo } from "react";
import { Link } from "react-router-dom";

function EmpCard({ employee, onDelete }) {

  console.log("EmployeeCard rendered:", employee.name);

  return (
    <div className="employee-card">

      <h3>{employee.name}</h3>

      <p>Department: {employee.department}</p>

      <p>Salary: ₹{employee.salary}</p>

      <Link to={`/performance/employees/${employee.id}`}>View Details</Link>

      <button onClick={() => onDelete(employee.id)}> Delete </button>
    </div>
  );
}

export default memo(EmpCard);