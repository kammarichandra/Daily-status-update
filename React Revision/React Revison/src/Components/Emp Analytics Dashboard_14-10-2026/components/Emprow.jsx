import { memo } from "react";

function Emprow({ employee, onEdit, onDelete }) {
  console.count("EmployeeRow rendered");

  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.department}</td>
      <td>
        {employee.salary.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
          maximumFractionDigits: 0,
        })}
      </td>
      <td>{employee.status}</td>
      <td>
        <button onClick={() => onEdit(employee.id)}>Edit</button>
        <button onClick={() => onDelete(employee.id)}>Delete</button>
      </td>
    </tr>
  );
}

export const MemoEmployeeRow = memo(Emprow);
export default Emprow;