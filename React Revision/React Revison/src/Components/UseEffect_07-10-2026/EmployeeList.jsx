import React, { useEffect, useState } from 'react'

function EmployeeList() {

    let [employees, setemployes] = useState([
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
    ])

    useEffect(() => {
        console.log("employee list was changed")
        console.log(employees)
    }, [employees]);

    let deleteEmployee = (id) => {
        setemployes(employees.filter(employee => employee.id !== id));
    }

    return (
        <div>
            <h2>EmployeeList</h2>
            {employees.map(employee => (
                <div key={employee.id}>

                    <p> {employee.id} - {employee.name} - {employee.role} </p>

                    <button onClick={() => deleteEmployee(employee.id)} > Delete </button>

                </div>
            ))}
        </div>
    )
}

export default EmployeeList