import { useState , useEffect } from "react";

export default function WithEmptyDependency(){
    let [count , setcount] = useState(0);

    useEffect(()=>{
        console.log()
    },[]);

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={()=> setcount(count + 1)}>inc</button>
        </div>
    )
}