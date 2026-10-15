
import { useEffect, useState } from "react";
import { getEmployees } from "../Services/EmpService";


function EmpList() {

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadEmployees() {
    setLoading(true);
    setError("");

    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (err) {
      setError(err.message || "Failed to load employees");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEmployees();
  }, []);

  if (loading) {
    return <p>Loading employees...</p>;
  }

  if (error) {
    return (
      <div role="alert">
        <p>{error}</p>
        <button onClick={loadEmployees}>Try Again</button>
      </div>
    );
  }

  if (employees.length === 0) {
    return <p>No employees found.</p>;
  }

  return (
    <div>
      <h2>Employee List</h2>

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
