export default function EmpTable({ employees }) {
  if (employees.length === 0) {
    return <p>No employees found.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}