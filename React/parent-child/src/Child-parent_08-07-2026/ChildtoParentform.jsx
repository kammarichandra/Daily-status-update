import { useState } from "react";


function ChildForm({ sendName }) {
  const [name, setName] = useState("");

  function handleSubmit() {
    sendName(name);
    setName("");
  }

  return (
    <div className="card">
      <h2>Form Example</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default ChildForm;