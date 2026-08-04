import { useNavigate } from "react-router-dom";

function Home6() {

  const navigate = useNavigate();

  const openProfile = () => {

    navigate("/Navbar/profile6", {

      state: {
        name: "Chandra",
        age: 22,
        course: "React JS",
      },

    });

  };

  return (
    <div>

      <h1>Home Page</h1>

      <button onClick={openProfile}>
        View Profile
      </button>

    </div>
  );
}

export default Home6;