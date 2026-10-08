import { useState } from "react";

function Post() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {

    const { name, value } = e.target;

    setUser({...user, [name]: value });
  };

  // POST API
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(user)
        }
      );

      const data = await response.json();

      console.log("API Response:", data);

      setMessage("User added successfully!");

      // Clear form
      setUser({
        name: "",
        email: "",
        phone: ""
      });

    } catch (error) {
      console.log("Error:", error);
      setMessage("Failed to add user.");
    }
  };

  return (
    <div>
      <h2>Add User</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name</label>
          <br />
          <input type="text" name="name"  value={user.name} onChange={handleChange} placeholder="Enter name" required />
        </div>
        <br />

        <div>
          <label>Email</label>
          <br />
          <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter email" required />
        </div>

        <br />

        <div>
          <label>Phone</label>
          <br />

          <input type="text"  name="phone" value={user.phone} onChange={handleChange} placeholder="Enter phone" required />
        </div>
        <br />
        <button type="submit">  Add User </button>

      </form>
      <p>{message}</p>
    </div>
  );
}

export default Post;