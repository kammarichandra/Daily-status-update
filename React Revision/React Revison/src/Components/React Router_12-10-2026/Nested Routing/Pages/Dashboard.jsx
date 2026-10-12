function Dashboard() {
  return (
    <div className="content-card">
      <h1>Dashboard Overview</h1>
      <p>Welcome to your TeamSync employee dashboard.</p>

      <div className="stats-grid">
        
        <div className="stat-card">
          <h3>Total Employees</h3>
          <p>120</p>
        </div>

        <div className="stat-card">
          <h3>Departments</h3>
          <p>8</p>
        </div>

        <div className="stat-card">
          <h3>Pending Requests</h3>
          <p>12</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;