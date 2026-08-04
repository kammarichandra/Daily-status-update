import { useNavigate } from "react-router-dom";

function Dashboard5() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard5;