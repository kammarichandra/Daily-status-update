import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>TeamSync EMS</h2>

      <Link to="/dashboard">Dashboard</Link>{" "}
      <Link to="/employees">Employees</Link>{" "}
      <Link to="/add-employee">Add Employee</Link>{" "}
      <Link to="/">Logout</Link>
    </nav>
  );
}

export default Navbar;