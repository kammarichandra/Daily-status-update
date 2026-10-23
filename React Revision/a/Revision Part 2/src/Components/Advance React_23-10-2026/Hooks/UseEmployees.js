
import { useEffect, useState } from "react";

import { employeeService } from "../Features/EmpService";

function useEmployees() {

  const [employees, setEmployees] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    async function fetchEmployees() {
      try {
        setLoading(true);

        const data = await employeeService.getEmployees();

        setEmployees(data);

      } catch (err) {

        setError(err.message);

      } finally {

        setLoading(false);

      }
    }

    fetchEmployees();
  }, []);


  async function addEmployee(employee) {

    try {

      const data = await employeeService.addEmployee(employee);

      setEmployees((prev) => [

        ...prev,
        {
          ...employee,
          id: data.id || Date.now(),
        },
      ]);

    } catch (err) {
      setError(err.message);
      throw err;
    }
  }

  async function updateEmployee(id, employee) {
    try {
      await employeeService.updateEmployee( id, employee );

      setEmployees((prev) =>
        prev.map((item) =>
          item.id === Number(id)
            ? { ...item, ...employee }
            : item
        )
      );
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }

  async function deleteEmployee(id) {
    
    try {
      await employeeService.deleteEmployee(id);

      setEmployees((prev) => prev.filter(
          (item) => item.id !== Number(id)
        )
      );
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }

  return { employees, loading, error, addEmployee, updateEmployee, deleteEmployee, };

}

export default useEmployees;
