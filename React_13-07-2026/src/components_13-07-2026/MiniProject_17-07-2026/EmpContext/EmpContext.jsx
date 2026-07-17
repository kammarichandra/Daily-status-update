import { createContext, useState } from "react";

export const EmpContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  return (
    <EmpContext.Provider
      value={{
        employees,
        setEmployees,
        addEmployee,
      }}
    >
      {children}
    </EmpContext.Provider>
  );
};