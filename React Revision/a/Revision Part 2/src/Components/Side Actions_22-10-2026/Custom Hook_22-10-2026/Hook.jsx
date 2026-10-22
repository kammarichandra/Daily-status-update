import PostList from "./Components/PostList";
import UserList from "./Components/UserList";
import useLocalStorage from "./Hooks/UseLocalStorage";

function Hook() {

  const [name, setName] = useLocalStorage("username", "");

  return (
    <div className="container">
      <h1>Custom Hooks Demo</h1>

      <h2>Local Storage Example</h2>

      <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />

      <p>Welcome, {name || "Guest"}!</p>

      <hr />

      <UserList />

      <hr />

      <PostList />
    </div>
  );
}

export default Hook;
