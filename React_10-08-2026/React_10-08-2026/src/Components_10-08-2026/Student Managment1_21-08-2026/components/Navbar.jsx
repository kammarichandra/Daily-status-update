import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");

    navigate("/login");
  }

  return (
    <nav className="navbar">

      <h2>Student Portal</h2>

      <div className="nav-links">

        <Link to="/dashboard"> Dashboard </Link>

        <Link to="/dashboard/students"> Students </Link>

        <Link to="/dashboard/courses"> Courses </Link>

        <Link to="/dashboard/settings"> Settings </Link>

        <button onClick={handleLogout}> Logout </button>

      </div>
      
    </nav>
  );
}

export default Navbar;