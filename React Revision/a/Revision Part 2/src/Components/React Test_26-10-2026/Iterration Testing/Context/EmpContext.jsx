import { createContext, useReducer } from "react";
import employeeReducer from "./EmpReduser";

export const EmployeeContext = createContext();

const initialEmployees = [
  { id: 1, name: "Chandra", role: "Developer" },
  { id: 2, name: "Rahul", role: "Tester" },
];

export function EmployeeProvider({ children }) {
  const [employees, dispatch] = useReducer(
    employeeReducer,
    initialEmployees
  );

  return (
    <EmployeeContext.Provider value={{ employees, dispatch }} >
      {children}
    </EmployeeContext.Provider>
  );
}