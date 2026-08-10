import { Link } from "react-router";

const users = [
  {
    id: 1,
    name: "chnadra"
  },
  {
    id: 2,
    name: "kcs"
  },
  {
    id: 3,
    name: "sekhar"
  }
];

function Users() {

  return (
    <div>

      <h2>Users</h2>

      {users.map((user) => (

        <div className="user-card" key={user.id}>

          <span> {user.name} </span> 

          <Link to={`/dashboard/users/${user.id}`} >  View </Link>

        </div>

      ))}

    </div>
  );
}

export default Users;