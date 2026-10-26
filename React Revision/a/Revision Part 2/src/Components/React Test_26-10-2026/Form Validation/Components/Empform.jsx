import { useState } from "react";

function Empform({ onSubmit }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!name || !email || !role) {
      setError("All fields are required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email address");
      return;
    }

    onSubmit({ name, email, role });
  };

  return (
    <div>
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="employee-email">Email</label>
        <input id="employee-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="role">Role</label>
        <input id="role" value={role} onChange={(e) => setRole(e.target.value)} />

        <button type="submit">Add Employee</button>
      </form>

      {error && <p role="alert">{error}</p>}
    </div>
  );
}

export default Empform;