import React from "react";
function Transactions() {
  return (
    <div className="card">

      <h2>Recent Transactions</h2>

      <ul className="transaction-list">

        <li>
          <span>Amazon Purchase</span>
          <span className="debit">- ₹2,500</span>
        </li>

        <li>
          <span>Salary Credit</span>
          <span className="credit">+ ₹10,000</span>
        </li>

        <li>
          <span>Electricity Bill</span>
          <span className="debit">- ₹1,200</span>
        </li>

        <li>
          <span>Interest Credit</span>
          <span className="credit">+ ₹750</span>
        </li>

      </ul>

    </div>
  );
}

export default Transactions;