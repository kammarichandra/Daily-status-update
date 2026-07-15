export const todoInitialstate = [];

export const addtodo = "add todo";
export const deletetodo = "delete todo";
export const toggletodo = "toggle todo";

export function todoReducer(state, action) {
  switch (action.type) {
    case addtodo:
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];

    case deletetodo:
      return state.filter(
        (todo) => todo.id !== action.payload
      );

    case toggletodo:
      return state.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );

    default:
      return state;
  }
}