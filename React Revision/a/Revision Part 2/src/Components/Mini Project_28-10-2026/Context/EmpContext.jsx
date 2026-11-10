import { createContext, useContext, useReducer } from "react";

const EmpContext = createContext();

const initialEmployees = [
  {
    id: 1,
    name: "Ravi",
    department: "IT",
    salary: 30000,
  },
  {
    id: 2,
    name: "Priya",
    department: "HR",
    salary: 25000,
  },
];

function employeeReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      return state.filter(
        (employee) => employee.id !== action.payload
      );

    case "UPDATE":
      return state.map((employee) =>
        employee.id === action.payload.id
          ? action.payload
          : employee
      );

    default:
      return state;
  }
}

export function EmployeeProvider({ children }) {
  const [employees, dispatch] = useReducer(
    employeeReducer,
    initialEmployees
  );

  return (
    <EmpContext.Provider value={{ employees, dispatch }}>
      {children}
    </EmpContext.Provider>
  );
}

export function useEmployees() {
  return useContext(EmpContext);
}