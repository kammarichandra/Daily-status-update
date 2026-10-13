import { useEmployees } from "../Context/EmpContext";

function Dashboard() {
  const { state } = useEmployees();

  const total    =  state.employees.length;
  const active   =  state.employees.filter((employee) => employee.status === "Active").length;
  const inactive =  total - active;

  return (
    <section>
      <h2>Employee Dashboard</h2>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Employees</h3>
          <p>{total}</p>
        </div>

        <div className="card">
          <h3>Active Employees</h3>
          <p>{active}</p>
        </div>

        <div className="card">
          <h3>Inactive Employees</h3>
          <p>{inactive}</p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
