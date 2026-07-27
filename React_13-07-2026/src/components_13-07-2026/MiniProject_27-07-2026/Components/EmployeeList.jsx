import React, { useEffect, useState } from "react";
import { getEmployees } from "../services/api";
import EmployeeCard from "./EmployeeCard";

function EmployeeList() {

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {

    loadEmployees();

  }, []);

  const loadEmployees = async () => {

    try {

      const data = await getEmployees();

      setEmployees(data);

    } catch (err) {

      setError(err.message);

    } finally {

      setLoading(false);

    }

  };

  if (loading) return <h2>Loading Employees...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div>

      <h1>Employee Directory</h1>

      <button onClick={() => setCount(count + 1)}>
        Refresh Count : {count}
      </button>

      <hr />

      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
        />
      ))}

    </div>
  );
}

export default EmployeeList;