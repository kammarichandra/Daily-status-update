import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Employee Dashboard</h1>

      <p>Welcome to the Employee Management Portal.</p>

      <Link to="/employees">
        View Employees
      </Link>
    </div>
  );
}

export default Dashboard;