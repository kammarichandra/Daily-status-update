import React from 'react'

function EmpCard({ employee }) {

    return (
        <div className="employee-card">
            <h3>{employee.name}</h3>

            <p>Employee ID: {employee.id}</p>

            <p>Role: {employee.role}</p>

            <p>Email: {employee.email}</p>
        </div>
    )
}

export default EmpCard