import React, { useState } from 'react'

function Conditional() {

    const [isLoggedin, setIsLoggedin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [employees, setemployees] = useState([
        { id: 1, name: 'Chandra', role: 'Frontend Developer', active: true },
        { id: 2, name: 'Rahul', role: 'Java Developer', active: false },
        { id: 3, name: 'Priya', role: 'UI Designer', active: true }
    ])

    // if/else logic

    let getWelcomeMsg = () => {
        if (isLoggedin) {
            return 'Welcome to TeamSync!'
        } else {
            return 'Please log in to continue.'
        }
    }

    let removeAllEmployees = () => {
        setemployees()
    }

    // restore employees

    let restoreEmployees = () => {
        setemployees([
            { id: 1, name: 'Chandra', role: 'Frontend Developer', active: true },
            { id: 2, name: 'Rahul', role: 'Java Developer', active: false },
            { id: 3, name: 'Priya', role: 'UI Designer', active: true }
        ])
    }


    return (
        <div>
            {/* 1. Login / Logout using ternary */}
            <section>
                <h2>Login Status</h2>
                <p>{getWelcomeMsg()}</p>

                {isLoggedin ? (
                    <button onClick={() => {
                        setIsLoggedin(false)
                        setIsAdmin(false)
                    }}>
                        Logout
                    </button>
                ) : (
                    <button onClick={() => setIsLoggedin(true)}> Login </button>
                )}
            </section>

            {/* 2. Employee active/inactive status */}
            <section>
                <h2>Employees</h2>

                {employees.length > 0 ? (
                    employees.map((employee) => (
                        <div className="employee" key={employee.id}>
                            <div>
                                <h3>{employee.name}</h3>
                                <p>{employee.role}</p>
                            </div>

                            <span className={employee.active ? 'active' : 'inactive'}>
                                {employee.active ? 'Active' : 'Inactive'}
                            </span>
                        </div>
                    ))
                ) : (
                    <p>No employees found.</p>
                )}

                <button onClick={removeAllEmployees}> Remove All Employees </button>

                <button onClick={restoreEmployees}> Restore Employees </button>
            </section>

            {/* 3. Admin panel using && */}
            <section>
                <h2>Admin Access</h2>

                {isLoggedin && (
                    <label>
                        <input type="checkbox" checked={isAdmin} onChange={(event) => setIsAdmin(event.target.checked)} />
                        Enable admin view (demo)
                    </label>
                )}

                {isAdmin && isLoggedin && (
                    <div className="admin-panel">
                        <h3>Admin Panel</h3>
                        <p>Welcome, Administrator!</p>
                        <p>Manage employees and view reports.</p>
                    </div>
                )}
            </section>
        </div>
    )
}

export default Conditional