import { useLocation } from "react-router-dom";

function Profile6() {

  const location = useLocation();

  const data = location.state;

  

  return (
    <div>

      <h1>Profile Page</h1>

      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>Course: {data.course}</p>

    </div>
  );

}

export default Profile6;