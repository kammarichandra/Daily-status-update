import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
    return (
        <div>
            <h2>Employee Dashboard</h2>
            <h3>Total Employees : 3</h3>
            <Link to="/employees"> View Employees </Link>
        </div>
    )
}

export default Dashboard