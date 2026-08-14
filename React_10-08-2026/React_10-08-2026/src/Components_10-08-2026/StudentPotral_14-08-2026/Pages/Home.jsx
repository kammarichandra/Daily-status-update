import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "30px" }}>
        
      <h1>🎓 Student Portal</h1>

      <p>Welcome to our College Student Portal.</p>

      <h2>Features</h2>

      <ul>
        <li>Student Dashboard</li>
        <li>Student Profiles</li>
        <li>Course Details</li>
        <li>Protected Dashboard</li>
      </ul>

      <Link to="/login">
        <button>Go to Login</button>
      </Link>
    </div>
  );
}

export default Home;