import { useEffect, useState } from "react";

function UserRegistratioin() {

  // User list
  const [users, setUsers] = useState([]);

  // Form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // Error messages
  const [errors, setErrors] = useState({});

  // Edit mode
  const [editId, setEditId] = useState(null);

  // Message
  const [message, setMessage] = useState("");

  // useEffect
  useEffect(() => {
    console.log("User list updated:", users);
  }, [users]);


  // Handle input changes
  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };


  // Form validation
  const validateForm = () => {

    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone is required";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone must contain 10 digits";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  // Submit form
  const handleSubmit = (event) => {

    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Edit existing user
    if (editId !== null) {

      const updatedUsers = users.map((user) =>
        user.id === editId
          ? {
              ...user,
              name: formData.name,
              email: formData.email,
              phone: formData.phone
            }
          : user
      );

      setUsers(updatedUsers);
      setMessage("User updated successfully");

      setEditId(null);

    } else {

      // Add new user
      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone
      };

      setUsers([...users, newUser]);

      setMessage("User registered successfully");
    }

    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: ""
    });

    setErrors({});
  };


  // Edit user
  const handleEdit = (user) => {

    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone
    });

    setEditId(user.id);

    setMessage("");
  };


  // Delete user
  const handleDelete = (id) => {

    const updatedUsers = users.filter(
      (user) => user.id !== id
    );

    setUsers(updatedUsers);

    setMessage("User deleted successfully");
  };


  // Cancel edit
  const handleCancel = () => {

    setFormData({
      name: "",
      email: "",
      phone: ""
    });

    setErrors({});
    setEditId(null);
  };


  return (
    <div className="container">

      <h1>User Registration System</h1>


      {/* Registration Form */}

      <div className="form-container">

        <h2>
          {editId !== null
            ? "Edit User"
            : "User Registration"}
        </h2>

        <form onSubmit={handleSubmit}>

          {/* Name */}

          <div className="form-group">

            <label>Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
            />

            {errors.name && (
              <p className="error">{errors.name}</p>
            )}

          </div>


          {/* Email */}

          <div className="form-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />

            {errors.email && (
              <p className="error">{errors.email}</p>
            )}

          </div>


          {/* Phone */}

          <div className="form-group">

            <label>Phone</label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter 10 digit phone number"
            />

            {errors.phone && (
              <p className="error">{errors.phone}</p>
            )}

          </div>


          <button type="submit">

            {editId !== null
              ? "Update User"
              : "Register User"}

          </button>


          {/* Conditional Rendering */}

          {editId !== null && (
            <button
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}

        </form>


        {/* Success Message */}

        {message && (
          <p className="success">
            {message}
          </p>
        )}

      </div>


      {/* User List */}

      <div className="list-container">

        <h2>User List</h2>


        {/* Conditional Rendering */}

        {users.length === 0 ? (

          <p>No users registered yet.</p>

        ) : (

          <table border={2}>

            <thead>

              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>

            </thead>


            <tbody>

              {users.map((user) => (

                <tr key={user.id}>

                  <td>{user.id}</td>

                  <td>{user.name}</td>

                  <td>{user.email}</td>

                  <td>{user.phone}</td>

                  <td>

                    <button onClick={() => handleEdit(user)} > Edit </button>

                    <button onClick={() => handleDelete(user.id)} > Delete </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

    </div>
  );
}

export default UserRegistratioin;