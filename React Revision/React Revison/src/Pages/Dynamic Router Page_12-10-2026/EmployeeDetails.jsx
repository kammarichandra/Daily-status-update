import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import employees from '../../Components/React Router_12-10-2026/Dynamic Routing/employees';

function EmployeeDetails() {
    let { id } = useParams();
    let navigate = useNavigate();
    let employee = employees.find((emp) => emp.id === Number(id));

    if (!employee) {
        return (
            <div className="page">
                <h1>Employee Not Found</h1>
                <p>No employee exists with ID: {id}</p>
                <Link to="/employees">Back to Employee List</Link>
            </div>
        );
    }

    return (
        <div className="page">
            <h1>Employee Details</h1>

            <div className="employee-details">
                <p><strong>ID:</strong> {employee.id}</p>
                <p><strong>Name:</strong> {employee.name}</p>
                <p><strong>Role:</strong> {employee.role}</p>
                <p><strong>Department:</strong> {employee.department}</p>
                <p><strong>Email:</strong> {employee.email}</p>
                <p><strong>Salary:</strong> ₹{employee.salary}</p>
            </div>

            <div className="button-group">
                <button type="button" onClick={() => navigate('/employees')}>Back to Employee List</button>
                <button type="button" onClick={() => navigate(-2)}>Go Back</button>
            </div>
        </div>
    );
}

export default EmployeeDetails;