import React from "react";

function Logical({ hasMessages }) {
  return (
    <div>
      <h2>Dashboard</h2>
      {hasMessages && <p>You have new messages.</p>}
    </div>
  );
}

export default Logical;