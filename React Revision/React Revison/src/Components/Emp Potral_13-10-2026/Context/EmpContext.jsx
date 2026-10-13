
import { createContext, useContext, useReducer } from "react";

const EmpContext = createContext(null);

const initialState = {
  employees: [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@example.com",
      department: "IT",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Reddy",
      email: "priya@example.com",
      department: "HR",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Kiran Kumar",
      email: "kiran@example.com",
      department: "Finance",
      status: "Active",
    },
  ],
  search: "",
  department: "All",
  status: "All",
};

function employeeReducer(state, action) {
    
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [
          ...state.employees,
          {
            ...action.payload,
            id: Date.now(),
            status: action.payload.status || "Active",
          },
        ],
      };

    case "UPDATE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee.id === action.payload.id
            ? { ...employee, ...action.payload }
            : employee
        ),
      };

    case "DELETE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };

    case "UPDATE_STATUS":
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee.id === action.payload.id
            ? { ...employee, status: action.payload.status }
            : employee
        ),
      };

    case "SET_SEARCH":
      return { ...state, search: action.payload };

    case "SET_DEPARTMENT":
      return { ...state, department: action.payload };

    case "SET_STATUS_FILTER":
      return { ...state, status: action.payload };

    case "RESET_FILTERS":
      return {
        ...state,
        search: "",
        department: "All",
        status: "All",
      };

    default:
      return state;
  }
}

export function EmployeeProvider({ children }) {
  const [state, dispatch] = useReducer(
    employeeReducer,
    initialState
  );

  return (
    <EmpContext.Provider value={{ state, dispatch }}>
      {children}
    </EmpContext.Provider>
  );
}

export function useEmployees() {
  const context = useContext(EmpContext);

  if (!context) {
    throw new Error(
      "useEmployees must be used inside EmployeeProvider"
    );
  }

  return context;
}
