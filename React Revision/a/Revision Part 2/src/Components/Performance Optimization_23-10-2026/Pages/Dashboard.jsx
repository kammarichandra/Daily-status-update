import { useMemo } from "react";
import employees from "../data/Employees";


function Dashboard() {

  const totalEmployees = employees.length;

  const totalSalary = useMemo(() => {
    return employees.reduce(
      (total, employee) => total + employee.salary, 0
    );
  }, []);

  const averageSalary = totalEmployees ? totalSalary / totalEmployees : 0;

  return (
    <div className="container">
      <h2>EMS Dashboard</h2>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total Employees</h3>
          <p>{totalEmployees}</p>
        </div>

        <div className="dashboard-card">
          <h3>Total Salary</h3>
          <p>₹{totalSalary}</p>
        </div>

        <div className="dashboard-card">
          <h3>Average Salary</h3>
          <p>₹{averageSalary.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;