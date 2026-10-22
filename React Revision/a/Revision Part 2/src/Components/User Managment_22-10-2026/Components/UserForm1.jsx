
import { useState } from "react";

export default function UserForm({ onSave, user }) {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  function handleSubmit(e) {
    e.preventDefault();

    onSave({
      ...user,
      id: user?.id || Date.now(),
      name,
      email,
    });

    setName("");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit}>
        
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>

      <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <button type="submit">Save User</button>
    </form>
  );
}
