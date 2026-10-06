function EmployeeCard({ employee }) {

  return (
    <div>

      <h2>{employee.name}</h2>

      <p>Role: {employee.role}</p>

      <p>Department: {employee.department}</p>

      <p>Salary: ₹{employee.salary}</p>

      <p>Status: {employee.status}</p>

    </div>
  );
}

export default EmployeeCard;