const users = ["Alice", "Bob", "Charlie"];

function UserList() {
  return (
    <>
      <h2>Users</h2>

      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </>
  );
}

export default UserList;