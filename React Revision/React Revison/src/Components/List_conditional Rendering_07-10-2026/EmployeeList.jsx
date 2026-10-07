import React, { useState } from 'react'

function EmployeeList() {

    let [employees, setemployees] = useState([
        {
            id: 101,
            name: "Ravi",
            role: "Developer"
        },
        {
            id: 102,
            name: "Priya",
            role: "Designer"
        },
        {
            id: 103,
            name: "Arun",
            role: "Tester"
        }
    ]);

    // delete employee

    let deleteemployee = (id) => {
        let updatedemployees = employees.filter((employee) => employee.id !== id);
        setemployees(updatedemployees)
    }
    return (
        <div>
            <h2>lists</h2>
            <table border={2} cellSpacing={5} cellPadding={5}>
                <thead>
                    <th>Emp ID</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Action</th>
                </thead>

                <tbody >
                    {employees.map((emp) => (
                        <tr key={emp.id}>

                            <td>{emp.id}</td>

                            <td>{emp.name}</td>

                            <td>{emp.role}</td>

                            <td>
                                <button onClick={() => deleteemployee(emp.id)}> Delete </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList