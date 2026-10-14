import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <NavLink className="logo" to="/">
        TeamSync
      </NavLink>

      <nav>
        <NavLink to="/">Employees</NavLink>
        <NavLink to="/analytics">Analytics</NavLink>
      </nav>
    </header>
  );
}