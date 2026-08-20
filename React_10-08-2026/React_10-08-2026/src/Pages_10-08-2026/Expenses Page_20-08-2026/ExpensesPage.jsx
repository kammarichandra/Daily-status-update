import { lazy, Suspense, useState,} from "react";

import Dashboard from "../../Components_10-08-2026/Expenses Traker_20-08-2026/Pages/Dashboard";

// Lazy-loaded pages

const Expenses = lazy(() => import("../../Components_10-08-2026/Expenses Traker_20-08-2026/Pages/Expenses"));

const Analytics = lazy(() => import("../../Components_10-08-2026/Expenses Traker_20-08-2026/Pages/Analytics"));

const Settings = lazy(() => import("../../Components_10-08-2026/Expenses Traker_20-08-2026/Pages/Settings"));

function ExpensesPage() {

  const [page, setPage] = useState("dashboard");

  const renderPage = () => {

    switch (page) {
      case "dashboard":
        return <Dashboard />;

      case "expenses":
        return <Expenses />;

      case "analytics":
        return <Analytics />;

      case "settings":
        return <Settings />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
      }}
    >
      {/* Navigation */}

      <nav
        style={{
          background: "#111827",
          padding: "15px 25px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <NavButton
          onClick={() => setPage("dashboard")}
        >
          🏠 Dashboard
        </NavButton>

        <NavButton
          onClick={() => setPage("expenses")}
        >
          📋 Expenses
        </NavButton>

        <NavButton
          onClick={() => setPage("analytics")}
        >
          📊 Analytics
        </NavButton>

        <NavButton
          onClick={() => setPage("settings")}
        >
          ⚙️ Settings
        </NavButton>
      </nav>

      {/* Page */}

      <main
        style={{
          maxWidth: "1100px",
          margin: "auto",
          padding: "30px 20px",
        }}
      >
        <Suspense
          fallback={
            <div
              style={{
                textAlign: "center",
                padding: "50px",
              }}
            >
              <h2>Loading page...</h2>
              <p>Please wait...</p>
            </div>
          }
        >
          {renderPage()}
        </Suspense>
      </main>
    </div>
  );
}

function NavButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "#374151",
        color: "white",
        border: "none",
        padding: "10px 15px",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

export default ExpensesPage;