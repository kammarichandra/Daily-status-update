import React from "react";

const SummaryCard = React.memo(function SummaryCard({
  title,
  amount,
  color = "#2563eb",
}) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        borderLeft: `5px solid ${color}`,
        minWidth: "180px",
      }}
    >
      <p
        style={{
          margin: 0,
          color: "#666",
          fontSize: "14px",
        }}
      >
        {title}
      </p>

      <h2 style={{ margin: "10px 0 0" }}>
        {amount.toLocaleString("en-IN")}
      </h2>
    </div>
  );
});

export default SummaryCard;