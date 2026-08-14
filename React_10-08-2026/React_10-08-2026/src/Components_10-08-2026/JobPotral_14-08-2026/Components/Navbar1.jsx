import React from "react";
import { Link, Outlet} from "react-router-dom";

function Navbar1() {

  return (
    <>
      <nav className="navbar">

        <h2> 💼 JobFinder </h2>

        <div className="nav-links">

          <Link to="/"> Home </Link>

          <Link to="/jobs"> Jobs </Link>

          <Link to="/about"> About </Link>

          <Link to="/login"> Login </Link>

        </div>

      </nav>

      <Outlet />
    </>
  );
}

export default Navbar1;