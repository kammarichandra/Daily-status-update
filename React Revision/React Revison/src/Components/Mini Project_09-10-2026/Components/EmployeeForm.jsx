import { useEffect, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  department: "Engineering",
  status: "Active"
};

export default function EmployeeForm({ editingEmployee, onSave, onCancel}) {
    
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingEmployee) {
      setForm({
        name: editingEmployee.name,
        email: editingEmployee.email,
        department: editingEmployee.department,
        status: editingEmployee.status
      });
    } else {
      setForm(initialForm);
    }

    setErrors({});
  }, [editingEmployee]);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.department) {
      newErrors.department = "Select a department";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    onSave({
      ...form,
      name: form.name.trim(),
      email: form.email.trim()
    });

    setForm(initialForm);
  }

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h3>
        {editingEmployee ? "Edit Employee" : "Add Employee"}
      </h3>

      <label>Employee Name</label>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter employee name"
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <label>Email Address</label>
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter email address"
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label>Department</label>
      <select
        name="department"
        value={form.department}
        onChange={handleChange}
      >
        <option>Engineering</option>
        <option>HR</option>
        <option>Finance</option>
        <option>Marketing</option>
        <option>Operations</option>
      </select>

      <label>Status</label>
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
      >
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <div className="form-actions">
        <button type="submit">
          {editingEmployee ? "Update Employee" : "Add Employee"}
        </button>

        {editingEmployee && (
          <button type="button" className="secondary"
            onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}