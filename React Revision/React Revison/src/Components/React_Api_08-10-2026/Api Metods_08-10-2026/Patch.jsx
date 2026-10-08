import { useState } from "react";

function Patch() {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlePatch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        {
          method: "PATCH",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            email: email
          })
        }
      );

      const data = await response.json();

      console.log("Updated User:", data);

      setMessage("Email updated successfully!");
    } catch (error) {
      console.log("Error:", error);
      setMessage("Failed to update user.");
    }
  };

  return (
    <div>
      <h2>Update User Email</h2>

      <form onSubmit={handlePatch}>

        <label>User ID</label>
        <br />

        <input type="number" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="Enter User ID" required />
        <br />
        <br />

        <label>Email</label>
        
        <br />

        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter new email" required/>

        <br />
        <br />

        <button type="submit"> Update Email </button>

      </form>

      <p>{message}</p>
    </div>
  );
}

export default Patch;