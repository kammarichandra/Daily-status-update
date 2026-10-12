import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("loggedIn");
    navigate("/login");
  }

  return (
    <div>
      <h1>Employee Dashboard</h1>

      <nav>
        <Link to="/employees">Employee List</Link>
        {" | "}
        <Link to="/add-employee">Add Employee</Link>
      </nav>

      <p>Welcome to the Employee Management Portal!</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;