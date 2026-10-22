
import { useState } from "react";


import { UserProvider, useUsers } from "./Context/UserContext";
import UserForm from "./Components/UserForm1";

function UserApp() {
  const { users, dispatch, loading, error } = useUsers();
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [selected, setSelected] = useState(null);
  const [editing, setEditing] = useState(null);

  if (loading) return <h2>Loading users...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  const cities = [ "All", ...new Set(users.map((u) => u.address?.city).filter(Boolean)),];

  const filtered = users.filter((u) => {
    const matches =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());

    return matches && (city === "All" || u.address?.city === city);
  });

  function saveUser(user) {
    if (editing) {
      dispatch({
        type: "UPDATE",
        payload: { ...editing, ...user },
      });
      setEditing(null);
    } else {
      dispatch({ type: "ADD", payload: user });
    }
  }

  return (
    <div className="container">
      <h1>User Management</h1>

      <UserForm onSave={saveUser} user={editing} />

      <input placeholder="Search name or email" value={search} onChange={(e) => setSearch(e.target.value)}/>

      <select value={city} onChange={(e) => setCity(e.target.value)}>
        {cities.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      {filtered.map((user) => (
        <div className="card" key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.address?.city}</p>

          <button onClick={() => setSelected(user)}>Details</button>
          <button onClick={() => setEditing(user)}>Edit</button>
          <button onClick={() => dispatch({ type: "DELETE", payload: user.id }) } >
            Delete
          </button>
        </div>
      ))}

      {selected && (
        <div className="card">
          <h2>User Details</h2>
          <p>Name: {selected.name}</p>
          <p>Email: {selected.email}</p>
          <button onClick={() => setSelected(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default function Usm() {
  return (
    <UserProvider>
      <UserApp />
    </UserProvider>
  );
}
