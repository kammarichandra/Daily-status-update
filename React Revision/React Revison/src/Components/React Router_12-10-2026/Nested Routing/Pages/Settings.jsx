function Settings() {
  return (
    <div className="content-card">
      <h1>Settings</h1>
      <p>Manage your account preferences.</p>

      <div className="settings-option">
        <label htmlFor="display-name">Display Name</label>
        <input id="display-name" type="text" defaultValue="Admin User" />
      </div>

      <div className="settings-option">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" defaultValue="admin@example.com" />
      </div>

      <button type="button" onClick={() => alert("Demo settings saved!")}>  Save Settings </button>
      
    </div>
  );
}

export default Settings;