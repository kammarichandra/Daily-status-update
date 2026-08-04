import { Link, Outlet } from "react-router-dom";

function Navbar6() {

  return (

    <div>

      <h1>Dashboard</h1>

      <nav>

        <Link to="/Passing data page_04-08-2026">
          Home
        </Link>

        {" | "}

        <Link to="/Navbar">
          Dashboard
        </Link>

        {" | "}

        <Link to="/Navbar/profile6">
          Profile
        </Link>

      </nav>

      <hr />

      <Outlet />

    </div>

  );

}

export default Navbar6;