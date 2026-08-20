import React from "react";

const ExpenseItem = React.memo(function ExpenseItem({ expense, onDelete,}) {
    
  console.log("Rendering:", expense.title);

  return (
    <div
      style={{
        background: "#fff",
        padding: "16px",
        marginBottom: "10px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 1px 5px rgba(0,0,0,0.08)",
      }}
    >
      <div>
        <h3 style={{ margin: "0 0 5px" }}>
          {expense.title}
        </h3>

        <p
          style={{
            margin: "3px 0",
            color: "#666",
          }}
        >
          {expense.category}
        </p>

        <small style={{ color: "#888" }}>
          {expense.date}
        </small>
      </div>

      <div style={{ textAlign: "right" }}>
        <h3 style={{ margin: "0 0 8px", color: "#dc2626" }}>
          ₹{expense.amount.toLocaleString("en-IN")}
        </h3>

        <button
          onClick={() => onDelete(expense.id)}
          style={{
            background: "#dc2626",
            color: "white",
            border: "none",
            padding: "7px 12px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
});

export default ExpenseItem;