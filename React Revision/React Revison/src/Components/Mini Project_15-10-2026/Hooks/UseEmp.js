import { useEffect, useState } from "react";
import { getEmployees } from "../Services/EmpService";


export default function useEmployees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getEmployees()
      .then(setEmployees)
      .catch(() => setError("Unable to load employees"))
      .finally(() => setLoading(false));
  }, []);

  function addEmployee(employee) {
    setEmployees((current) => [...current, employee]);
  }

  return { employees, loading, error, addEmployee };
}