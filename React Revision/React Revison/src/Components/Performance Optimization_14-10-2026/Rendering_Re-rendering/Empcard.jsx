function Empcard({ employee }) {
  console.log("EmployeeCard rendered:", employee.name);

  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p>Role: {employee.role}</p>
    </div>
  );
}

export default Empcard;