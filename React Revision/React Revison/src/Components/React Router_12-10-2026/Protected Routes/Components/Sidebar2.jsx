import { NavLink } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Sidebar2() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <aside className="sidebar">
      <h3>MAIN MENU</h3>

      <nav className="sidebar-nav">
        <NavLink to="/dashboard" end>
          Dashboard
        </NavLink>

        <NavLink to="/dashboard/employees">
          Employees
        </NavLink>

        <NavLink to="/dashboard/settings">
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar2;