import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div>
        <h1>Dashboard</h1>

        <nav>

        <Link to="/">Home</Link> |{" "}
        <Link to="profile">Profile</Link> |{" "}
        <Link to="settings">Settings</Link> |{" "}
        <Link to="orders">Orders</Link>

        </nav>

        <hr />
        <Outlet/>

    </div>
  )
}

export default DashboardLayout;