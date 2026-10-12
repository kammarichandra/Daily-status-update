function DashboardEmployees() {
  const employees = [
    { id: 101, name: "Rahul Sharma", role: "Developer" },
    { id: 102, name: "Priya Reddy", role: "HR Executive" },
    { id: 103, name: "Arjun Kumar", role: "Designer" }
  ];

  return (
    <div className="content-card">
      <h1>Employees</h1>
      <p>Manage your employee records.</p>

      <div className="table-wrapper">

        <table border={1}>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardEmployees;