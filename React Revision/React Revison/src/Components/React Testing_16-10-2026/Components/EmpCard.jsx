function EmpCard({ employee }) {
  return (
    <div>
      <h3>{employee.name}</h3>
      <p>{employee.role}</p>
    </div>
  )
}

export default EmpCard