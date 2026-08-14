import { useNavigate } from "react-router-dom";

function Dashboard() {
  let navigate = useNavigate();

  let handleLogout = () => { localStorage.removeItem("isLoggedIn");

    navigate("/login");
    
  };

  return (
    <div className="page">
      <h1>Dashboard</h1>

      <p>
        Welcome to your dashboard!
      </p>

      <p>
        This page is protected.
      </p>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;