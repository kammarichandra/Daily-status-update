function Reports() {
  console.log("Reports page loaded");

  return (
    <section className="page">
      <h1>Reports</h1>
      <p>View employee and department reports.</p>

      <div className="card">
        <h3>Monthly Employee Report</h3>
        <p>New employees: 12</p>
        <p>Employees on leave: 5</p>
      </div>
    </section>
  );
}

export default Reports;