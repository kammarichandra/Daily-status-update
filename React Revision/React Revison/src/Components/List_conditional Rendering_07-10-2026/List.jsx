import React from 'react'

function List() {
    let employee = [
        {
            id: 1,
            name: "Ravi",
            role: "Developer",
            department: "IT"
        },
        {
            id: 2,
            name: "Priya",
            role: "Designer",
            department: "UI/UX"
        },
        {
            id: 3,
            name: "Arun",
            role: "Tester",
            department: "QA"
        }
    ]
    return (
        <div>
            <h2>Employee Table</h2>
            <table border={2}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Department</th>
                    </tr>
                </thead>

                <tbody>
                    {employee.map((employee1)=>(
                        <tr key={employee1.id}>
                            <td>{employee1.id}</td>
                            <td>{employee1.name}</td>
                            <td>{employee1.department}</td>
                            <td>{employee1.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List