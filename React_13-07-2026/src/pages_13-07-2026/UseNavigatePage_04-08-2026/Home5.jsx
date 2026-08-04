import { useNavigate } from "react-router-dom";

function Home5() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={goToLogin}>
        Go To Login
      </button>
    </div>
  );
}

export default Home5;