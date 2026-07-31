import { useState } from "react";

function AddEmployee({ addEmployee }) {
    let [name, setName] = useState("");

    let handleSubmit = (e) => {

        e.preventDefault();

        if (!name) return;

        addEmployee({
            id: Date.now(),
            name,
            email: `${name}@company.com`,
        });

        setName("");
    };

    return (

        <form onSubmit={handleSubmit}>

            <label htmlFor="">Emp Name : </label><br />
            <input placeholder="Employee Name" value={name} onChange={(e) => setName(e.target.value)} /> <br />

            <button>Add Employee</button>
        </form>
    );
}

export default AddEmployee;