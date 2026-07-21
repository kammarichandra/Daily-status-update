import axios from "axios";
import { useEffect, useState } from "react";

function AxiosWithLoading() {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
      setLoading(false);
    }

    loadUsers();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default AxiosWithLoading;