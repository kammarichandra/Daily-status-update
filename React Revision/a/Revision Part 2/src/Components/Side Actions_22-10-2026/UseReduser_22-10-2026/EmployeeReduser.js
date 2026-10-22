
const initialEmployees = [
  { id: 1, name: "Ravi", role: "Developer" },
  { id: 2, name: "Priya", role: "Tester" },
  { id: 3, name: "Kiran", role: "Designer" },
];

export function employeeReducer(state, action) {

  switch (action.type) {

    case "ADD_EMPLOYEE":
      return [...state, action.payload];

    case "UPDATE_EMPLOYEE":

      return state.map((employee) =>
        employee.id === action.payload.id
          ? { ...employee, ...action.payload }
          : employee
      );

    case "DELETE_EMPLOYEE":
        
      return state.filter(
        (employee) => employee.id !== action.payload
      );

    case "RESET_EMPLOYEES":
      return initialEmployees;

    default:
      return state;
  }
}

export { initialEmployees };
