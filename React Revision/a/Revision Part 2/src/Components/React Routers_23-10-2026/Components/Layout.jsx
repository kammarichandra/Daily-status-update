
import { Link, Outlet, useNavigate,} from "react-router-dom";

function Layout() {

  const navigate = useNavigate();

  const handleLogout = ()=> {

    localStorage.removeItem("isLoggedIn");

    navigate("/login");
  }

  return (
    <div>
      <nav>
        
        <Link to="/dashboard">Dashboard</Link>{" | "}

        <Link to="/employees">Employees</Link>{" | "}

        <Link to="/employees/add">Add Employee</Link>{" | "}

        <Link to="/performance">Performance Demo</Link>{" | "}

        <button onClick={handleLogout}> Logout </button>

      </nav>

      <hr />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
