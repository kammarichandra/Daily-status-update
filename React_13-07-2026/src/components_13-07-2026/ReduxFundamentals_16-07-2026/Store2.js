
import { createStore } from "redux";
import counterReducer from "./CounterReducer";


let Store2 = createStore(
  counterReducer
);


export default Store2;