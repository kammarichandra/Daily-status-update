import axios from "axios";
import { useEffect, useState } from "react";

function AxiosGet() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    }

    getUsers();
  }, []);

  return (
    <div>
      <h2>Axios GET</h2>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default AxiosGet;