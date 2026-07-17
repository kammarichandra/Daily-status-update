import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link>{" | "}
      <Link to="/employees">Employees</Link>{" | "}
      <Link to="/add">Add Employee</Link>{" | "}
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default Navbar;