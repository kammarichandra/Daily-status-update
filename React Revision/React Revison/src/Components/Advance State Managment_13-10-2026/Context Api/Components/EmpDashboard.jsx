import { useEmployees } from "../Context/EmpContext";

function EmpDashboard() {
  const { state } = useEmployees();

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Total Employees: {state.employees.length}</h3>
    </div>
  );
}

export default EmpDashboard;