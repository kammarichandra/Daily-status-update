
function UserForm({ form, setForm, editingId, onSubmit, onCancel,}) {
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form className="user-form" onSubmit={onSubmit}>
      <h2>{editingId !== null ? "Edit User" : "Add User"}</h2>

      <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required/>

      <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required/>

      <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} required />

      <button type="submit">
        {editingId !== null ? "Update User" : "Add User"}
      </button>

      {editingId !== null && (
        <button
          type="button"
          className="secondary"
          onClick={onCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default UserForm;
