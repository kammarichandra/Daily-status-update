import React from 'react'
import EmployeeHeader from '../../Components/Parent_child_06-10-2026/EmployeeHeader'
import EmployeeDetails from '../../Components/Parent_child_06-10-2026/EmployeeDetails'
import SendingData from '../../Components/Parent_child_06-10-2026/sendingData'



function Employee() {
    let employee = {
        name: "Chandra",
        id: "EMP101",
        department: "IT",
        role: "Java Developer",
        salary: 30000
    }
    return (
        <div>
            <h1>Parent to child </h1><br />
            
            <EmployeeHeader name={employee.name} /><br />

            <EmployeeDetails 
            id={employee.id}
            dept={employee.department}
            role={employee.role}
            sal={employee.salary}
            />
            <br />
            <h2>Sending data</h2><br />
            <SendingData
            name="chandra"
            role="ASE"
            city="atp"
            />
        </div>
    )
}

export default Employee