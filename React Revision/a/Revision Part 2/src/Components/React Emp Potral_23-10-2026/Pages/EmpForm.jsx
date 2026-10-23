import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useEmp from "../Hooks/UseEmp";


function EmpForm() {
    const { id } = useParams();

    const { employees, dispatch } = useEmp();
    const navigate = useNavigate();

    const existingEmployee = employees.find(
        (emp) => emp.id === Number(id)
    );

    const [name, setName] = useState(
        existingEmployee?.name || ""
    );

    const [email, setEmail] = useState(
        existingEmployee?.email || ""
    );

    const [department, setDepartment] = useState(
        existingEmployee?.department || "IT"
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        const employee = {
            id: existingEmployee?.id || Date.now(),
            name,
            email,
            department,
        };

        dispatch({
            type: existingEmployee ? "UPDATE" : "ADD",
            payload: employee,
        });

        navigate("/portal/employees");
    }

    return (
        <div>
            <h2>
                {existingEmployee ? "Edit Employee" : "Add Employee"}
            </h2>

            <form onSubmit={handleSubmit}>
                <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />

                <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <select value={department} onChange={(e) => setDepartment(e.target.value)} >
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                </select>

                <button type="submit">Save Employee</button>
            </form>
        </div>
    );
}

export default EmpForm;