import { createContext, useContext, useReducer } from "react";

// 1. Create Context
const EmployeeContext = createContext();

// 2. Initial State
const initialState = {
  employees: [
    { id: 1, name: "Rahul", department: "IT" },
    { id: 2, name: "Priya", department: "HR" },
  ],
};

// 3. Reducer Function
function employeeReducer(state, action) {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };

    case "DELETE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter((emp) => emp.id !== action.payload),
      };

    default:
      return state;
  }
}

// 4. Provider Component
export function EmpContext({ children }) {
  const [state, dispatch] = useReducer(employeeReducer, initialState);

  return (
    <EmployeeContext.Provider value={{ state, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
}

// 5. Custom Hook
export function useEmployees() {
  const context = useContext(EmployeeContext);

  if (!context) {
    throw new Error("useEmployees must be used inside EmployeeProvider");
  }

  return context;
}