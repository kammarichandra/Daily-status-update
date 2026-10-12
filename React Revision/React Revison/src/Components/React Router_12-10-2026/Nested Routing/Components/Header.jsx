import React from 'react'

function Header() {
    return (
        <header className="dashboard-header">
            <div className="header-brand">
                <h2>TeamSync</h2>
                <span>Employee Management</span>
            </div>

            <div className="header-user">
                <div className="user-avatar">C</div>

                <div>
                    <h4>Admin User</h4>
                    <p>Administrator</p>
                </div>
            </div>
        </header>
    )
}

export default Header