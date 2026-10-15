import EmpForm from "../Components/EmpForm";
import EmpTable from "../Components/EmpTable";
import useEmployees from "../Hooks/UseEmp";


export default function EmpList() {
  const { employees, loading, error, addEmployee } = useEmployees();

  if (loading) return <p>Loading employees...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Employee Management</h2>

      <EmpForm onAdd={addEmployee} />

      <EmpTable employees={employees} />
    </div>
  );
}