import { createContext, useReducer } from "react";

export const EmpContext = createContext();

const initialEmployees = [
  {
    id: 1,
    name: "Rahul",
    department: "IT",
    email: "rahul@gmail.com",
  },
  {
    id: 2,
    name: "Priya",
    department: "HR",
    email: "priya@gmail.com",
  },
];

function employeeReducer(state, action) {

  switch (action.type) {
    
    case "ADD":
      return [...state, action.payload];

    case "UPDATE":
      return state.map((emp) =>
        emp.id === action.payload.id ? action.payload : emp
      );

    case "DELETE":
      return state.filter(
        (emp) => emp.id !== action.payload
      );

    default:
      return state;
  }
}

export function EmployeeProvider({ children }) {

  const [employees, dispatch] = useReducer( employeeReducer, initialEmployees );

  return (
    <EmpContext.Provider value={{ employees, dispatch }} >
      {children}
    </EmpContext.Provider>
  );
}