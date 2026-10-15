import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function EmpForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAdd({ ...form, id: Date.now() });

    setForm({ name: "", email: "", department: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Name" name="name" value={form.name} onChange={handleChange} />
      <Input label="Email" name="email" value={form.email} onChange={handleChange} />
      <Input label="Department" name="department" value={form.department} onChange={handleChange} />

      <Button type="submit">Add Employee</Button>
    </form>
  );
}