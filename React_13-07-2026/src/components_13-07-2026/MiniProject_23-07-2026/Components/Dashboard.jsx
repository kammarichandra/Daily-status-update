import React from "react";
function Dashboard({ user }) {
  return (
    <div className="card">

      <h1>🏦 Bank Dashboard</h1>

      <h3>Welcome, {user.name}</h3>

      <p><strong>Account No:</strong> 1234567890</p>

      <p><strong>Branch:</strong> Hyderabad</p>

      <p className="balance">75,000</p>

    </div>
  );
}

export default Dashboard;