function Reports() {
  return (
    <div>
      <h1>Reports</h1>

      <div style={styles.card}>
        <h2>Monthly Sales</h2>

        <div style={styles.chart}>
          <div style={{ ...styles.bar, height: "40%" }}>
            Jan
          </div>

          <div style={{ ...styles.bar, height: "65%" }}>
            Feb
          </div>

          <div style={{ ...styles.bar, height: "80%" }}>
            Mar
          </div>

          <div style={{ ...styles.bar, height: "55%" }}>
            Apr
          </div>

          <div style={{ ...styles.bar, height: "90%" }}>
            May
          </div>

          <div style={{ ...styles.bar, height: "75%" }}>
            Jun
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    padding: "30px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },

  chart: {
    height: "300px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-around",
    borderBottom: "2px solid #ddd",
    marginTop: "30px",
  },

  bar: {
    width: "60px",
    background: "#2563eb",
    color: "white",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: "10px",
    borderRadius: "5px 5px 0 0",
  },
};

export default Reports;