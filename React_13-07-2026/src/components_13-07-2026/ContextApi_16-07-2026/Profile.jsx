import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  let { user, changeName } = useContext(UserContext);

  return (
    <div>
      <h2>Profile Component</h2>

      <h3>Name: {user.name}</h3>

      <h3>Age: {user.age}</h3>

      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default Profile;