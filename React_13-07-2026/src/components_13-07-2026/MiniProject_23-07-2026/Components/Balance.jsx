import React from "react";

function Balance({ user }) {
  return (
    <div className="card">

      <h2>Available Balance</h2>

      <p>Customer: {user.name}</p>

      <h1 className="balance">75,000</h1>

    </div>
  );
}

export default Balance;