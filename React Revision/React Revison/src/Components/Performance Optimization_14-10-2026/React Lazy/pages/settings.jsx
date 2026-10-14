function Settings() {
  console.log("Settings page loaded");

  return (
    <section className="page">
      <h1>Settings</h1>
      <p>Manage your TeamSync preferences.</p>

      <div className="card">
        <h3>Account Settings</h3>
        <label>
          <input type="checkbox" defaultChecked />
          Enable email notifications
        </label>

        <br />

        <label>
          <input type="checkbox" />
          Enable dark mode
        </label>
      </div>
    </section>
  );
}

export default Settings;