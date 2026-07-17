function EmpCard({ employee }) {
  return (
    <div className="card">
      <h2>{employee.name}</h2>

      <p>Email: {employee.email}</p>

      <p>Company: {employee.company?.name}</p>

      <p>Phone: {employee.phone}</p>

      <hr />
    </div>
  );
}

export default EmpCard;