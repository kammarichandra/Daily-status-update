import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          background: "#333",
        }}
      >
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>

        <Link to="/login" style={{ color: "white" }}>
          Login
        </Link>

        <Link to="/dashboard" style={{ color: "white" }}>
          Dashboard
        </Link>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;