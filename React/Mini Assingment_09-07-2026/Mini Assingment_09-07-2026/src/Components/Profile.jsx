import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Profile() {

  const { user, changeUser } = useContext(AppContext);

  return (

    <div className="card">

      <h2>User Information</h2>

      <p>Name : {user.name}</p>

      <p>Email : {user.email}</p>

      <button onClick={changeUser}>
        Change User
      </button>

    </div>

  );

}

export default Profile;