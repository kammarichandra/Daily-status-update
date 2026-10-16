function EmpTable({ employees }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default EmpTable