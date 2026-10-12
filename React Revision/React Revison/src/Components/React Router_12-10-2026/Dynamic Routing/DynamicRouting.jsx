import React from 'react';
import { NavLink } from 'react-router-dom';

function DynamicRouting() {
    return (
        <nav className="navbar">
            <h2 className="logo">Employee Portal</h2>

            <div className="nav-links">
                <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    About
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    Contact
                </NavLink>
                <NavLink to="/employees" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    Employees
                </NavLink>
                <NavLink to="/employees/add" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    Add Employee
                </NavLink>
                <NavLink to="/login" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    Login
                </NavLink>
            </div>
        </nav>
    );
}

export default DynamicRouting;