import { useState } from "react";


function ChangeEvent() {

    let [name, setName] = useState("");


    function handleChange(e) {

        setName(e.target.value);

    }


    return (

        <div>

            <input value={name} onChange={handleChange} />

            <h2>{name}</h2>

        </div>

    );

}

export default ChangeEvent;