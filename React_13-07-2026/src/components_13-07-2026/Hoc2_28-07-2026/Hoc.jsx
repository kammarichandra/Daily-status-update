import React from "react";

let Hoc =  (Component)=>{
    return function Athuntication(props){
        let users = {
            name : "chandra",
            age : "24",
            isloggedin : true
        }
        return (
            <div>
                <h2>welcome user </h2>
                <Component {...props}/>
            </div>
        )
    }
}
export default Hoc;