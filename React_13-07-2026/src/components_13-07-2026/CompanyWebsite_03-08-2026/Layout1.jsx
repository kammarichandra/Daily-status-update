import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
function Layout1() {
  return (
    <>
      <Navbar />
      <hr />
      <Outlet />
    </>
  )
}

export default Layout1