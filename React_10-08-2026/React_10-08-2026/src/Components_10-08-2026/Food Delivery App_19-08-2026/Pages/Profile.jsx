import { useAuth } from "../Context/AuthContext";

function Profile() {
    
  const { user } = useAuth();

  if (!user) {
    return <h2>Please login</h2>;
  }

  return (
    <div>
      <h1>My Profile</h1>

      <p> Name: {user.name} </p>

      <p> Email: {user.email} </p>
    </div>
  );
}

export default Profile;