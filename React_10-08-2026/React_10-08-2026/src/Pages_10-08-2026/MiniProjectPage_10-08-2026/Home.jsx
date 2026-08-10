import { useNavigate } from "react-router";

function Home() {

  const navigate = useNavigate();

  return (
    <div>

      <h1>Home</h1>

      <p> Welcome to the React Router project. </p>

      <button onClick={() => navigate("/dashboard")} > Go to Dashboard  </button>

    </div>
  );
}

export default Home;