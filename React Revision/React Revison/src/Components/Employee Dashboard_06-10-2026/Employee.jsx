import React from 'react'
import Dashboard from './Components/Dashboard';

function Employee() {

    let emp = {
        name: "Chandra",
        role: "Java Developer",
        department: "IT",
        salary: 30000,
        status: "Active"
    }

    return (
        <div>
            <Dashboard employee = {emp}/>
        </div>
    )
}

export default Employee