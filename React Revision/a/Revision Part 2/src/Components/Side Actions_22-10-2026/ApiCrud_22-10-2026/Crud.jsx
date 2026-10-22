
import { useState, useEffect } from "react";
import UserForm from "./UserForm";
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
  getUsersWithAxios,
} from "./UserApi";

function Crud() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [sort, setSort] = useState("asc");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // GET users
  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data))
      .catch(() => setError("Failed to load users"))
      .finally(() => setLoading(false));
  }, []);

  // ADD and UPDATE user
  async function handleSubmit(e) {
    e.preventDefault();

    const user = {
      name: form.name.trim(),
      email: form.email.trim(),
      address: { city: form.city.trim() },
    };

    if (!user.name || !user.email || !user.address.city) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setError("");

      if (editingId !== null) {
        const updated = await updateUser(editingId, user);

        setUsers(
          users.map((u) =>
            u.id === editingId
              ? { ...u, ...updated, address: user.address }
              : u
          )
        );
      } else {
        const newUser = await addUser(user);

        setUsers([
          ...users,
          { ...user, ...newUser, id: Date.now() },
        ]);
      }

      setForm({ name: "", email: "", city: "" });
      setEditingId(null);
    } catch {
      setError("Operation failed");
    }
  }

  // EDIT user
  function handleEdit(user) {
    setEditingId(user.id);

    setForm({
      name: user.name,
      email: user.email,
      city: user.address?.city || "",
    });
  }

  // DELETE user
  async function handleDelete(id) {
    if (!window.confirm("Delete this user?")) return;

    try {
      await deleteUser(id);
      setUsers(users.filter((u) => u.id !== id));
    } catch {
      setError("Failed to delete user");
    }
  }

  // SEARCH, FILTER and SORT
  let filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchesCity =
      city === "All" || user.address?.city === city;

    return matchesSearch && matchesCity;
  });

  filteredUsers.sort((a, b) => {
    const result = a.name.localeCompare(b.name);
    return sort === "asc" ? result : -result;
  });

  const cities = [
    "All",
    ...new Set(users.map((u) => u.address?.city).filter(Boolean)),
  ];

  // AXIOS request
  async function handleAxios() {
    try {
      setUsers(await getUsersWithAxios());
      setError("");
    } catch {
      setError("Axios request failed");
    }
  }

  if (loading) return <h2>Loading users...</h2>;

  return (
    <div className="container">
      <h1>User Management System</h1>

      <UserForm
        form={form}
        setForm={setForm}
        editingId={editingId}
        onSubmit={handleSubmit}
        onCancel={() => {
          setEditingId(null);
          setForm({ name: "", email: "", city: "" });
        }}
      />

      {error && <p className="error">{error}</p>}

      <div className="toolbar">
        <input
          placeholder="Search name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={city} onChange={(e) => setCity(e.target.value)}>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c === "All" ? "All Cities" : c}
            </option>
          ))}
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="asc">A to Z</option>
          <option value="desc">Z to A</option>
        </select>

        <button onClick={handleAxios}>Reload with Axios</button>
      </div>

      <h3>Total Users: {filteredUsers.length}</h3>

      <div className="user-grid">
        {filteredUsers.map((user) => (
          <div className="user-card" key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.address?.city}</p>

            <button onClick={() => handleEdit(user)}>Edit</button>

            <button onClick={() => handleDelete(user.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && <p>No users found.</p>}
    </div>
  );
}

export default Crud;
