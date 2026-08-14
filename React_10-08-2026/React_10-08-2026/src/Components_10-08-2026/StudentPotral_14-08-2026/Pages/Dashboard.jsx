import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  let navigate = useNavigate();

  let handleLogout = () => {
    
    localStorage.removeItem("isLoggedIn");

    navigate("/login");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>📊 Student Dashboard</h1>

      <p>Welcome! You are successfully logged in.</p>

      <hr />

      <h2>Student Information</h2>

      <p> <strong>Name:</strong> chnadra sekhar </p>

      <p> <strong>Student ID:</strong> 101 </p>

      <p> <strong>Department:</strong> Computer Science </p>

      <hr />

      <h2>Quick Links</h2>

      <Link to="/student/101">
        <button>View Profile</button>
      </Link>

      <br />
      <br />

      <Link to="/course/react">
        <button>View React Course</button>
      </Link>

      <br />
      <br />

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;