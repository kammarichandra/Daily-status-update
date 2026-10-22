
import { createContext, useContext, useReducer, useEffect } from "react";
import useFetch from "../Hooks/UseFetch";

const UserContext = createContext();

function reducer(state, action) {

  switch (action.type) {

    case "SET":
      return action.payload;

    case "ADD":
      return [...state, action.payload];

    case "UPDATE":
      return state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );

    case "DELETE":
      return state.filter((user) => user.id !== action.payload);

    default:
      return state;
  }
  
}

export function UserProvider({ children }) {

  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  const [users, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    if (data.length) {
      dispatch({ type: "SET", payload: data });
    }
  }, [data]);

  return (
    <UserContext.Provider value={{ users, dispatch, loading, error }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUsers() {
  return useContext(UserContext);
}
