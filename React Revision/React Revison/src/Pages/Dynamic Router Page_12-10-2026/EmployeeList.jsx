import React from 'react';
import employees from '../../Components/React Router_12-10-2026/Dynamic Routing/employees';
import { Link } from 'react-router-dom';

function EmployeeList() {
    return (
        <div className="page employee-list-page">
            <div className="employee-list-header">
                <h1>Employee Management</h1>
                <p>View employees and their details.</p>
            </div>

            <div className="employee-grid">
                {employees.map((employee) => (
                    <div className="employee-card" key={employee.id}>
                        <h3>{employee.name}</h3>
                        <p><strong>ID:</strong> {employee.id}</p>
                        <p><strong>Role:</strong> {employee.role}</p>
                        <p><strong>Department:</strong> {employee.department}</p>

                        <Link to={`/employees/${employee.id}`}>
                            <button type="button">View Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EmployeeList;