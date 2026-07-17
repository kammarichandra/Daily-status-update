import { useEffect, useContext } from "react";
import { EmpContext } from "../EmpContext/EmpContext";
import { fetchEmp } from "../EmpApi/EmpApi";
import EmpCard from "../EmpComponents/EmpCard";

function Emps() {
  const { employees, setEmployees } = useContext(EmpContext);

  useEffect(() => {
    if (employees.length === 0) {
      fetchEmp().then((data) => {
        setEmployees(data);
      });
    }
  }, []);

  return (
    <div>
      <h1>Employee List</h1>

      {employees.map((emp) => (
        <EmpCard
          key={emp.id}
          employee={emp}
        />
      ))}
    </div>
  );
}

export default Emps;