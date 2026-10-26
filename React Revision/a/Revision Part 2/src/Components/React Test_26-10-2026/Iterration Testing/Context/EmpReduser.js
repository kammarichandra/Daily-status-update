function empReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "UPDATE":
      return state.map((emp) =>
        emp.id === action.payload.id
          ? action.payload
          : emp
      );

    case "DELETE":
      return state.filter(
        (emp) => emp.id !== action.payload
      );

    default:
      return state;
  }
}

export default empReducer;