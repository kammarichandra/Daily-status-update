import { Link } from "react-router-dom";

function Home3() {
  return (
    <div className="home">
      <h1>Student Management System</h1>

      <p> Manage students, courses and academic information. </p>

      <Link className="btn" to="/login" > Login </Link>

    </div>
  );
}

export default Home3;