import { useState } from "react";

function EmpForm({ onAdd }) {

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    onAdd({
      id: Date.now(),
      name,
      role: "Developer",
    });

    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Employee Name" value={name} onChange={(e) => setName(e.target.value)}/>

      <button type="submit"> Add Employee </button>
    </form>
  );
}

export default EmpForm;