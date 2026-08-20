import { useState } from "react";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div>
      <h1>Settings</h1>

      <div style={styles.card}>

        <label style={styles.row}>
          <span>Dark Mode</span>

          <input type="checkbox" checked={darkMode}
            onChange={(e) =>
              setDarkMode(e.target.checked)
            } />

        </label>

        <hr />

        <label style={styles.row}>

          <span>Email Notifications</span>

          <input type="checkbox" checked={notifications}
            onChange={(e) =>
              setNotifications(e.target.checked)
            } />
            
        </label>

        <hr />

        <p>
          Dark Mode:{" "}
          <strong>
            {darkMode ? "Enabled" : "Disabled"}
          </strong>
        </p>

        <p>
          Notifications:{" "}
          <strong>
            {notifications ? "Enabled" : "Disabled"}
          </strong>
        </p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    maxWidth: "600px",
    padding: "30px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 0",
  },
};

export default Settings;