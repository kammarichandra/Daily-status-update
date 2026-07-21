import { useState , useEffect } from "react";

export default function WithoutDependency(){
    let [count , setcount] = useState(0);

    useEffect(()=>{
        console.log("effect executed")
    });

    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={()=> setcount(count + 1)}>increment</button>
        </div>
    )
}