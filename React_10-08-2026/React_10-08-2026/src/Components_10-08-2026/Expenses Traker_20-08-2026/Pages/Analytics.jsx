import { useMemo } from "react";

function Analytics() {
  const monthlyData = useMemo(() => {
    return [
      {
        month: "June",
        amount: 8500,
      },
      {
        month: "July",
        amount: 12500,
      },
      {
        month: "August",
        amount: 9320,
      },
    ];
  }, []);

  return (
    <div>
      <h1> Analytics</h1>

      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "end",
          height: "250px",
        }}
      >
        {monthlyData.map((item) => (
          <div
            key={item.month}
            style={{
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "70px",
                height: `${item.amount / 60}px`,
                background: "#2563eb",
                borderRadius: "8px 8px 0 0",
              }}
            />

            <p>{item.month}</p>

            <small>
              ₹{item.amount}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analytics;