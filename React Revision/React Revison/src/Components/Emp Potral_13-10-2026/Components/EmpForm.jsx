
import { useEffect, useState } from "react";
import { useEmployees } from "../Context/EmpContext";


const emptyForm = {
  name: "",
  email: "",
  department: "IT",
  status: "Active",
};

function EmpForm({ editingEmployee, onFinish }) {

  const { dispatch } = useEmployees();
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingEmployee) {
      setForm({
        name: editingEmployee.name,
        email: editingEmployee.email,
        department: editingEmployee.department,
        status: editingEmployee.status,
      });
    } else {
      setForm(emptyForm);
    }

    setError("");
  }, [editingEmployee]);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim()) {
      setError("Name and email are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Enter a valid email address.");
      return;
    }

    if (editingEmployee) {
      dispatch({
        type: "UPDATE_EMPLOYEE",
        payload: {
          ...form,
          id: editingEmployee.id,
        },
      });
    } else {
      dispatch({
        type: "ADD_EMPLOYEE",
        payload: form,
      });
    }

    setForm(emptyForm);
    setError("");
    onFinish();
  }

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <h3>
        {editingEmployee ? "Edit Employee" : "Add Employee"}
      </h3>

      <input
        name="name"
        placeholder="Employee Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
      />

      <select
        name="department"
        value={form.department}
        onChange={handleChange}
      >
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
        <option value="Marketing">Marketing</option>
      </select>

      {editingEmployee && (
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      )}

      {error && <p className="error">{error}</p>}

      <button type="submit">
        {editingEmployee ? "Update Employee" : "Add Employee"}
      </button>

      {editingEmployee && (
        <button type="button" onClick={onFinish}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default EmpForm;
