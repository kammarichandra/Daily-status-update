import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {

  return (
     <aside className="sidebar">

      <h3>MAIN MENU</h3>

      <nav className="sidebar-nav">

        <NavLink to="/dashboard" end>
          <span>▦</span> Dashboard
        </NavLink>

        <NavLink to="/dashboard/employees">
          <span>♙</span> Employees
        </NavLink>

        <NavLink to="/dashboard/settings">
          <span>⚙</span> Settings
        </NavLink>

      </nav>

    </aside>
  )
}

export default Sidebar