import React from 'react'

function Header() {
    return (
        <header className="header">
            <h1>My Profile</h1>

            <nav>
                <a href="#profile">Profile</a>
                <a href="#skills">Skills</a>
                <a href="#education">Education</a>
            </nav>
            
        </header>
    )
}

export default Header