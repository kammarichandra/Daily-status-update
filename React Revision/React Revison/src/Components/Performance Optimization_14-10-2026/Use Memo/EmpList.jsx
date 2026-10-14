function EmpList({ employees }) {

  console.log("EmployeeList rendered");

  if (employees.length === 0) {
    return <p>No employees found.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Monthly Salary</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.department}</td>
            <td>
              {employee.salary.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0, })
                }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmpList;