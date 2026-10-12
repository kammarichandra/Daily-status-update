import React from 'react';
import { NavLink } from 'react-router-dom';

function Main() {
    return (
        <nav className="navbar">
            <h2 className="logo">MyWebsite</h2>

            <div className="nav-links">
                <NavLink to="/" end>
                    Home
                </NavLink>

                <NavLink to="/About">
                    About
                </NavLink>

                <NavLink to="/Contact">
                    Contact
                </NavLink>
            </div>
        </nav>
    );
}

export default Main;