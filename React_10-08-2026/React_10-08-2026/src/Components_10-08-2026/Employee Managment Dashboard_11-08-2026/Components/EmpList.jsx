import React from 'react'
import EmpCard from './EmpCard'

function EmpList({ employees, onDelete }) {

    if (employees.length === 0) {

        return (
            <div className="no-employees">

                <h2> No employees found</h2>
                <p>Try changing your search or department.</p>

            </div>
        );
    }
    return (
        <div className="employee-list">
            {employees.map((employee) => (
                <EmpCard
                    key={employee.id}
                    employee={employee}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}

export default EmpList