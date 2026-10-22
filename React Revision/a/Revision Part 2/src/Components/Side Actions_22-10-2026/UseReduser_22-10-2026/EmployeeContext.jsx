
import { createContext, useReducer } from "react";
import { employeeReducer, initialEmployees } from "./EmployeeReduser";


export const EmployeeContext = createContext();

export function EmployeeProvider({ children }) {
  const [employees, dispatch] = useReducer( employeeReducer, initialEmployees );

  return (
    <EmployeeContext.Provider value={{ employees, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
}
