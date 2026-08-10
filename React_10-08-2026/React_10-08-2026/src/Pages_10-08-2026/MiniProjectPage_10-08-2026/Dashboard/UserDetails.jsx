import { useParams, useNavigate } from "react-router";

function UserDetails() {

  let { id } = useParams();

  let navigate = useNavigate();

  return (
    <div>

      <h2>User Details</h2>

      <p>  User ID: {id}</p>

      <button onClick={() => navigate(-1)} > Go Back </button>

    </div>
  );
}

export default UserDetails;