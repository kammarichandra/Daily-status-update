function Settings() {
  return (
    <div>
      <h1>Settings</h1>

      <div className="settings-card">

        <label>
          Name
        </label>

        <input
          type="text"
          placeholder="Admin"
        />

        <label>
          Email
        </label>

        <input
          type="email"
          placeholder="admin@gmail.com"
        />

        <button>
          Save Changes
        </button>

      </div>
    </div>
  );
}

export default Settings;