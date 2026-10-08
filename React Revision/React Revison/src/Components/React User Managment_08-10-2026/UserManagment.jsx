import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function UserManagment() {

  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");

  const [city, setCity] = useState("all");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Run when component loads
  useEffect(() => {
    fetchUsers();
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");

      if (editingId) {
        const response = await fetch(
          `${API_URL}/${editingId}`,
          {
            method: "PUT",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update user");
        }

        const updatedUser = await response.json();

        setUsers(
          users.map((user) =>
            user.id === editingId
              ? {
                  ...user,
                  ...updatedUser,
                }
              : user
          )
        );

        setEditingId(null);
      }

      else {
        const response = await fetch(API_URL, {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            ...formData,

            address: {
              city: "Unknown",
            },
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to add user");
        }

        const newUser = await response.json();

        setUsers([...users, newUser]);
      }

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
      });

    } catch (error) {
      setError(error.message);
    }
  };

  const handleEdit = (user) => {
    setEditingId(user.id);

    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
  };

  const handleCancel = () => {
    setEditingId(null);

    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  const handleDelete = async (id) => {
    try {
      setError("");

      const response = await fetch(
        `${API_URL}/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      // Remove from UI
      setUsers(
        users.filter((user) => user.id !== id)
      );

    } catch (error) {
      setError(error.message);
    }
  };


  const filteredUsers = users.filter((user) => {

    const matchesSearch =
      user.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCity =
      city === "all" ||
      user.address?.city === city;

    return matchesSearch && matchesCity;
  });


  const cities = [
    ...new Set(
      users
        .map((user) => user.address?.city)
        .filter(Boolean)
    ),
  ];

  return (
    <div>

      <h1>User Management</h1>

      {/* Error */}
      {error && (
        <div>
          {error}
        </div>
      )}

      {/* ---------------- FORM ---------------- */}

      <form onSubmit={handleSubmit}>

        <h2>
          {editingId? "Edit User" : "Add User"}
        </h2>

        <input type="text" name="name" placeholder="Enter name" value={formData.name} onChange={handleChange} required />

        <br />

        <input  type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required />

        <br />
      
        <input type="text" name="phone" placeholder="Enter phone" value={formData.phone} onChange={handleChange} required />
        <br />

        <button type="submit">
          {editingId ? "Update User": "Add User"}
        </button>

        {editingId && (
          <button type="button" onClick={handleCancel} style={{ marginLeft: "10px" }} > Cancel </button>
        )}

      </form>

      <hr />

      {/* ---------------- SEARCH ---------------- */}

      <h2>User List</h2>

      <input type="text" placeholder="Search by name or email..." value={search} onChange={(e) => setSearch(e.target.value) }
      />

      {/* ---------------- FILTER ---------------- */}

      <select  value={city} onChange={(e) =>
          setCity(e.target.value) }
      >
        <option value="all"> All Cities </option>

        {cities.map((cityName) => (
          <option key={cityName} value={cityName} > {cityName} </option>
        ))}
      </select>
      <br />
     

      {/* ---------------- LOADING ---------------- */}

      {loading && (
        <h3>Loading users...</h3>
      )}

      {/* ---------------- USER LIST ---------------- */}

      {!loading && filteredUsers.length === 0 && (
        <p>No users found.</p>
      )}

      {!loading && filteredUsers.map((user) => (
          <div key={user.id} >
            <h3>{user.name}</h3>

            <p>
              <strong>ID:</strong>{" "}
              {user.id}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {user.email}
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              {user.phone}
            </p>

            <p>
              <strong>City:</strong>{" "}
              {user.address?.city}
            </p>

            <button onClick={() => handleEdit(user) } > Edit </button>

            <button onClick={() => handleDelete(user.id)
              }
              style={{
                marginLeft: "10px",
              }}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}

export default UserManagment;