import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import employeeData from '../Data/Emp';

function EmployeeList() {
    let [searchParams, setSearchParams] = useSearchParams();

    let search = searchParams.get('search') || '';
    let department = searchParams.get('department') || 'All';

    let updateFilter = (key, value) => {
        let nextParams = new URLSearchParams(searchParams);

        if (!value || (key === 'department' && value === 'All')) {
            nextParams.delete(key);
        } else {
            nextParams.set(key, value);
        }

        setSearchParams(nextParams);
    };

    let filteredEmployees = employeeData.filter((employee) => {
        let matchesName = employee.name.toLowerCase().includes(search.toLowerCase());
        let matchesDepartment =
            department === 'All' ||
            employee.department.toLowerCase() === department.toLowerCase();

        return matchesName && matchesDepartment;
    });

    return (
        <div className="page">
            
            <h1>Employee Management</h1>

            <div className="employee-filters">
                <input type="search" placeholder="Search by employee name..." value={search} onChange={(e) => updateFilter('search', e.target.value)} />

                <select value={department} onChange={(e) => updateFilter('department', e.target.value)}>
                    <option value="All">All Departments</option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="Design">Design</option>
                </select>

            </div>

            <p>Showing {filteredEmployees.length} employee(s)</p>

            {filteredEmployees.length > 0 ? (
                <div className="employee-list">
                    {filteredEmployees.map((employee) => (
                        <div className="employee-card" key={employee.id}>
                            <h3>{employee.name}</h3>
                            <p><strong>ID:</strong> {employee.id}</p>
                            <p><strong>Role:</strong> {employee.role}</p>
                            <p><strong>Department:</strong> {employee.department}</p>

                            <Link to={`/employees/${employee.id}`}>View Details</Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No employees match your search and department filters.</p>
            )}
        </div>
    );
}

export default EmployeeList;