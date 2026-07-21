import { useEffect, useState } from "react";

function Loading() {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      let data = await response.json();

      setUsers(data);
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

export default Loading;