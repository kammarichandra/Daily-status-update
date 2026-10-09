export default function EmployeeCard({
  employee,
  onEdit,
  onDelete
}) {
  return (
    <article className="employee-card">
      <div className="employee-avatar">
        {employee.name.charAt(0).toUpperCase()}
      </div>

      <div className="employee-details">
        <h3>{employee.name}</h3>
        <p>{employee.email}</p>
        <p>{employee.department}</p>
        <span className={
          employee.status === "Active"
            ? "status active"
            : "status inactive"
        }>
          {employee.status}
        </span>
      </div>

      <div className="card-actions">
        <button className="secondary" onClick={() => onEdit(employee)}> Edit </button>

        <button className="danger" onClick={() => onDelete(employee.id)}> Delete </button>
      </div>
    </article>
  );
}