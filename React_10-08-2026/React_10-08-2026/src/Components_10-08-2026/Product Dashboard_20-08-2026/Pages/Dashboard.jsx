function Dashboard() {
  const stats = [
    {
      title: "Total Sales",
      value: "₹2,45,000",
      color: "#2563eb",
    },
    {
      title: "Orders",
      value: "1,245",
      color: "#16a34a",
    },
    {
      title: "Products",
      value: "856",
      color: "#9333ea",
    },
    {
      title: "Customers",
      value: "5,432",
      color: "#ea580c",
    },
  ];

  return (
    <div>
      <h1>Dashboard</h1>

      <p>
        Welcome to your e-commerce dashboard.
      </p>

      <div style={styles.grid}>
        {stats.map((stat) => (
          <div
            key={stat.title}
            style={{
              ...styles.card,
              borderTop: `4px solid ${stat.color}`,
            }}
          >
            <h3>{stat.title}</h3>

            <h2>{stat.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },

  card: {
    padding: "25px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
};

export default Dashboard;