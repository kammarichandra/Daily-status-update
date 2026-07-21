import { useState , useEffect } from "react";

export default function Cleanup(){
    let [seconds , setseconds] = useState(0);

    useEffect(()=>{
        let timer = setInterval(()=>{
            setseconds((prev)=> prev + 1);
        },1000);

        return () =>{
            clearInterval(timer);
            console.log("timer cleared")
        };
    },[]);

    return (
        
        <h2>{seconds}</h2>
    );
}