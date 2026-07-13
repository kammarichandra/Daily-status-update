import React, { createContext, useState } from "react";

// Create Context
export let CounterContext = createContext();


let CounterProvider = ({ children }) => {

  let [count, setCount] = useState(0);


  let increment = () => {
    setCount(count + 1);
  };


  let decrement = () => {
    setCount(count - 1);
  };


  let reset = () => {
    setCount(0);
  };


  return (

    <CounterContext.Provider
      value={{
        count,
        increment,
        decrement,
        reset
      }}
    >

      {children}

    </CounterContext.Provider>

  );

};


export default CounterProvider;