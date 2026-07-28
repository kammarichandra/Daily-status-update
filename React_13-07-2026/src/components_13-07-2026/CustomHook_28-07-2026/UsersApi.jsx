import useFetch from "./useFetch";

function Users() {

  let users = useFetch("https://jsonplaceholder.typicode.com/users");
  
  return (
    <>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}
export default Users;