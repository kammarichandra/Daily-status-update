function EmpStats({ stats }) {
  console.log("EmployeeStats rendered");

  const formatCurrency = (amount) =>
    amount.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    });

  return (
    <div className="stats">
      <div className="stat-card">
        <h3>Employees</h3>
        <p>{stats.employeeCount}</p>
      </div>

      <div className="stat-card">
        <h3>Total Salary</h3>
        <p>{formatCurrency(stats.totalSalary)}</p>
      </div>

      <div className="stat-card">
        <h3>Average Salary</h3>
        <p>{formatCurrency(stats.averageSalary)}</p>
      </div>
    </div>
  );
}

export default EmpStats;