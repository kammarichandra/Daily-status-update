import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { employees } from '../../../Pages/React Router Page_23-10-2026/Employees';

function EmpDetails() {

    const { id } = useParams();

    const employee = employees.find((emp) => emp.id === Number(id));

    if (!employee) {
        return <h2>Employee Not Found</h2>;
    }

    return (
        <div>
            <h2>Employee Details</h2>

            <p>ID:         {employee.id}</p>
            <p>Name:       {employee.name}</p>
            <p>Department: {employee.department}</p>
            <p>Salary:     {employee.salary}</p>

            <Link to="/employees"> Back to Employees </Link>
        </div>
    )
}

export default EmpDetails