import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h2>React Router Practice</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

          <Link to="/products">Products</Link>

          <Link to="/dashboard">Dashboard</Link>

          <Link to="/login">Login</Link>
        </div>
      </nav>

      {/* Child routes will render here */}
      <Outlet />
    </>
  );
}

export default Navbar;