import { memo } from "react";

function SummaryCards({ stats }) {
  console.count("SummaryCards rendered");

  const currency = (value) =>
    value.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    });

  return (
    <div className="summary-grid">
      <article className="summary-card">
        <h3>Employees</h3>
        <p>{stats.count.toLocaleString("en-IN")}</p>
      </article>

      <article className="summary-card">
        <h3>Total Salary</h3>
        <p>{currency(stats.totalSalary)}</p>
      </article>

      <article className="summary-card">
        <h3>Average Salary</h3>
        <p>{currency(stats.averageSalary)}</p>
      </article>

      <article className="summary-card">
        <h3>Active Employees</h3>
        <p>{stats.activeCount.toLocaleString("en-IN")}</p>
      </article>
    </div>
  );
}

export default memo(SummaryCards);