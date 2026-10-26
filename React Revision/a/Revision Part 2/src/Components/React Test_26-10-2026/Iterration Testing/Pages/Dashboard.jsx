import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <Link to="/employees">
        Employee List
      </Link>
    </div>
  );
}

export default Dashboard;