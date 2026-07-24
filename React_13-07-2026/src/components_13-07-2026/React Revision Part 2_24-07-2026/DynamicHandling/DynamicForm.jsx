import React, { useState } from "react";

function DynamicForm() {
  let [form, setForm] = useState({
    name: "",
    email: "",
  });

  let handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <input type="text" name="name" placeholder="Enter Name" value={form.name} onChange={handleChange} />

      <br /><br />

      <input type="email" name="email" placeholder="Enter Email" value={form.email} onChange={handleChange} />

      <h3>Name: {form.name}</h3>
      <h3>Email: {form.email}</h3>
    </div>
  );
}

export default DynamicForm;