import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Header2() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <header className="dashboard-header">
      <div className="header-brand">
        <h2>TeamSync</h2>
        <span>Employee Management</span>
      </div>

      <div className="header-user">
        <div className="user-avatar">
          {user?.name?.charAt(0) || "U"}
        </div>

        <div className="user-info">
          <h4>{user?.name}</h4>
          <p>{user?.role}</p>
        </div>

        <button
          type="button"
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header2;