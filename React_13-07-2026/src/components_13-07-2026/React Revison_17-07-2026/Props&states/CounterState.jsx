import { useState } from "react";

function CounterState(){

    let [count , setcount] = useState(0);

    return (

        <div>
            <h1>State</h1>
            <h3>{count}</h3>
            <button onClick={()=> setcount(count+1)}>Inc</button>
        </div>
    )
}
export default CounterState;