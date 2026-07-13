import React, { useContext } from "react";
import { CounterContext } from "./Countercontext";

let counter = ()=>{

    let {count , increment , decrement , reset } = useContext(CounterContext);

    return (

        <div>
            <h1> contextApi</h1>
            <h1>Count : {count}</h1>

            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default counter;