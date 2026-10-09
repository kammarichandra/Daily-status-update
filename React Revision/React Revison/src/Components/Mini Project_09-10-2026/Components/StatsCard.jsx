export default function StatsCards({ employees }) {
    
  const total = employees.length;
  const departments = new Set(
    employees.map(emp => emp.department)
  ).size;

  const active = employees.filter(
    emp => emp.status === "Active"
  ).length;

  const stats = [
    { title: "Total Employees", value: total },
    { title: "Departments", value: departments },
    { title: "Active Employees", value: active }
  ];

  return (
    <section className="stats-grid">
      {stats.map(stat => (
        <div className="stat-card" key={stat.title}>
          <p>{stat.title}</p>
          <h2>{stat.value}</h2>
        </div>
      ))}
    </section>
  );
}