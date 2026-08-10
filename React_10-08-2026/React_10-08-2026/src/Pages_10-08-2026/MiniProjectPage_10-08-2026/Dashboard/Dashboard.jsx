import { Link, Outlet} from "react-router";

function Dashboard() {
  return (
    <div>

      <h1>Dashboard</h1>

      <nav>

        <Link to="/dashboard"> Overview </Link>

        <Link to="/dashboard/profile"> Profile </Link>

        <Link to="/dashboard/users"> Users </Link>

      </nav>

      <hr />

      <Outlet />

    </div>
  );
}

export default Dashboard;