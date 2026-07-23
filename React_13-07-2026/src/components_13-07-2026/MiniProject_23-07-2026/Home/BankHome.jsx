import React from "react";

import Dashboard from "../Components/Dashboard";
import Transactions from "../Components/Transaction";
import Balance from "../Components/Balance";

import withAuth from "../Hoc/WithAuth";
import withAuthorization from "../Hoc/WithAuthorization";

// Dashboard
const CustomerDashboard = withAuth(
  withAuthorization(Dashboard, "customer")
);

// Balance
const CustomerBalance = withAuth(
  withAuthorization(Balance, "customer")
);

// Transactions
const CustomerTransactions = withAuth(
  withAuthorization(Transactions, "customer")
);

function App() {
  return (
    <div className="app-container">
      <div className="banner">
        <h1>🏦 SBI Bank</h1>
        <p>Secure Digital Banking Portal</p>
      </div>

      <CustomerDashboard />
      <CustomerBalance />
      <CustomerTransactions />
    </div>
  );
}

export default App;