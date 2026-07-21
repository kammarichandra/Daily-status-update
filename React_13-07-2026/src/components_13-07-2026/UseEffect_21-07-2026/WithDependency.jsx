import { useState , useEffect } from "react";

export default function WithDependency(){

    let [count , setcount ] = useState(0);
    let [name , setname ] = useState(" ");

    useEffect(()=>{
        console.log("count changed : ", count);
    },[count]);

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={()=> setcount(count + 1)}>increment</button><br /><br />
            <input type="text" placeholder="enter name" value={name} onChange={(e)=>setname(e.target.value)} />
        </div>
    )
}