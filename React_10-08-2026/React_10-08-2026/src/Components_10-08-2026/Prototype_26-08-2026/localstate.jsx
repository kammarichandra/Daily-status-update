import { useState } from "react";

function localstate(){

    let [name , setname] = useState("");

    return(
        <div>
            <p>name {name}</p>
            <button onClick={()=>setname("rahul")}>send</button>
        </div>
    )

}

export default localstate;
