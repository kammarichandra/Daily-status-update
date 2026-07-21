import { useState , useEffect } from "react";

export default function MultipleDependency(){

    let [count , setcount ] = useState(0);
    let [name , setname ] = useState(" ");

    useEffect(()=>{
        console.log("count or number change");
    },[count , name]);

    return ( 
        <div>
            <button onClick={()=>setcount(count + 1)}>count </button>
            <input type="text" value={name} onChange={(e)=> setname(e.target.value)} />
        </div>
    );
} 