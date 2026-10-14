import { NavLink } from "react-router-dom";

function Header() {
  console.log("Header rendered");

  return (
    <header className="header">
      <NavLink to="/" className="logo">
        TeamSync
      </NavLink>

      <nav className="nav-links">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/reports">Reports</NavLink>
        <NavLink to="/performance">Performance</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
    </header>
  );
}

export default Header;