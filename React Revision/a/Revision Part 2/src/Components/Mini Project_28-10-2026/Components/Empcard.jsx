import { memo } from "react";

const EmpCard = memo(function EmployeeCard({
  employee,
  onDelete,
}) {
  return (
    <div>
      <h3>{employee.name}</h3>

      <p>Department: {employee.department}</p>

      <p>Salary: {employee.salary}</p>

      <button onClick={() => onDelete(employee.id)}>
        Delete
      </button>
    </div>
  );
});

export default EmpCard;