import { useEmployees } from "../context/EmployeeContext";

function Dashboard3() {
  const { employees } = useEmployees();

  return (
    <div>
      <h2>Dashboard</h2>

      <h3>Total Employees: {employees.length}</h3>
    </div>
  );
}

export default Dashboard3;