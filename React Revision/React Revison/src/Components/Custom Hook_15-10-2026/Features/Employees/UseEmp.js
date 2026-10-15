import { useCallback, useEffect, useState } from "react";
import { getEmployees } from "./EmpService";


export default function UseEmp() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const refreshEmployees = useCallback(async () => {
    const controller = new AbortController();

    setLoading(true);
    setError("");

    try {
      const data = await getEmployees(controller.signal);
      setEmployees(data);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshEmployees();
  }, [refreshEmployees]);

  function addEmployee(employee) {
    setEmployees((previous) => [
      ...previous,
      {
        ...employee,
        id: Date.now(),
        status: employee.status || "Active",
      },
    ]);
  }

  function updateEmployee(id, updates) {
    setEmployees((previous) =>
      previous.map((employee) =>
        employee.id === id
          ? { ...employee, ...updates }
          : employee
      )
    );
  }

  function deleteEmployee(id) {
    setEmployees((previous) =>
      previous.filter((employee) => employee.id !== id)
    );
  }

  return {
    employees,
    loading,
    error,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    refreshEmployees,
  };
}