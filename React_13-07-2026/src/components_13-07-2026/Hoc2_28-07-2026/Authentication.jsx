function Dashboard() {
  return <h2>Dashboard</h2>;
}

function withAuth(WrappedComponent) {
  return function () {
    let isLoggedIn = false;

    return isLoggedIn ? (
      <WrappedComponent />
    ) : (
      <h2>Please Login</h2>
    );
  };
}

let ProtectedDashboard = withAuth(Dashboard);

export default function App() {
  return <ProtectedDashboard />;
}