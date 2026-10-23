
import useEmployees from "../Hooks/UseEmployees";


function EmpList() {
  const { employees, loading, error } = useEmployees();

  if (loading) {
    return <p>Loading employees...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>

      <h2>Employees</h2>

      {employees.map((employee) => (

        <div key={employee.id}>
          <h3>{employee.name}</h3>
          <p>{employee.email}</p>
        </div>

      ))}
    </div>
  );
}

export default EmpList;
