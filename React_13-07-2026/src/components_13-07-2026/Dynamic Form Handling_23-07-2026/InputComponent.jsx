import { useState } from "react";

function InputComponent(){
    let [name , setname] = useState("");

    return (
        <div>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="enter your name"/>
            <p>heloo {name}</p>
        </div>
    )
}
export default InputComponent;