import { useReducer, useState } from "react";

import {
  todoReducer,
  todoInitialstate,
  addtodo,
  deletetodo,
  toggletodo,
} from "./TodoReducer";

function Todo() {
  const [state, dispatch] = useReducer(
    todoReducer,
    todoInitialstate
  );

  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;

    dispatch({
      type: addtodo,
      payload: text,
    });

    setText("");
  };

  return (
    <div>
      <h2>Todo App</h2>

      <input
        type="text"
        placeholder="Enter Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add Todo
      </button>

      <ul>
        {state.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() =>
                dispatch({
                  type: toggletodo,
                  payload: todo.id,
                })
              }
              style={{
                cursor: "pointer",
                textDecoration: todo.completed
                  ? "line-through"
                  : "none",
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() =>
                dispatch({
                  type: deletetodo,
                  payload: todo.id,
                })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;