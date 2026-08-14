import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h2>Student Portal</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/CourseDetails">Course Details</Link>

          <Link to="/StudentProfile">Student Profile</Link>

          <Link to="/dashboard">Dashboard</Link>

          <Link to="/login">Login</Link>
        </div>
      </nav>

      {/* Child routes render here */}
      <Outlet />
    </>
  );
}

export default Navbar;