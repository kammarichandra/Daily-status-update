import useEmp from "../Hooks/UseEmp";



function Dashboard1() {
    
  const { employees } = useEmp();

  return (
    <div>
      <h2>Dashboard</h2>

      <h3>Total Employees: {employees.length}</h3>
    </div>
  );
}

export default Dashboard1;