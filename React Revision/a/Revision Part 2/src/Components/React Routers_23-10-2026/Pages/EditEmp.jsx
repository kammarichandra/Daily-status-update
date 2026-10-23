import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { employees } from '../../../Pages/React Router Page_23-10-2026/Employees';

function EditEmp() {

    const { id } = useParams();
    const navigate = useNavigate();
    const employee = employees.find((emp) => emp.id === Number(id));

    if (!employee) {
        return <h2>Employee Not Found</h2>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Employee updated successfully!");

        navigate("/employees");
    }

    return (
        <div>
            <h2>Edit Employee</h2>

            <form onSubmit={handleSubmit}>

                <input type="text" defaultValue={employee.name} required />

                <input type="text" defaultValue={employee.department} required />

                <input type="number" defaultValue={employee.salary} required />

                <button type="submit"> Update Employee </button>

            </form>
        </div>
    )
}

export default EditEmp