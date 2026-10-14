import Header from "../components/Header";

function Dashboard() {
  console.log("Dashboard loaded");

  return (
    
    <section className="page">
        <Header/>
      <h1>TeamSync Dashboard</h1>
      <p>Welcome to your Employee Management Portal.</p>

      <div className="stats">
        <div className="card">
          <h3>Total Employees</h3>
          <p>120</p>
        </div>

        <div className="card">
          <h3>Active Employees</h3>
          <p>105</p>
        </div>

        <div className="card">
          <h3>Pending Requests</h3>
          <p>8</p>
        </div>
      </div>

    </section>
  );
}

export default Dashboard;