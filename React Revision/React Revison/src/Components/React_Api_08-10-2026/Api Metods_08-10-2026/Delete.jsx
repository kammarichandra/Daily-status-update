import { useState } from "react";

function Delete() {
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        {
          method: "DELETE"
        }
      );

      if (response.ok) {
        setMessage("User deleted successfully!");
      } else {
        setMessage("Failed to delete user.");
      }

    } catch (error) {
      console.log("Error:", error);
      setMessage("Something went wrong.");
    }
  };

  return (
    <div>
      <h2>Delete User</h2>

      <form onSubmit={handleDelete}>

        <label>User ID</label>
        <br />
        <input type="number" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="Enter User ID"  required />

        <br />
        <button type="submit">  Delete User </button>

      </form>

      <p>{message}</p>
    </div>
  );
}

export default Delete;