function Users() {
  return <h2>User Data Loaded</h2>;
}

function withLoading(WrappedComponent) {
  return function ({ isLoading }) {
    return isLoading ? (
      <h2>Loading...</h2>
    ) : (
      <WrappedComponent />
    );
  };
}

let UserLoader = withLoading(Users);

export default function App() {
  return <UserLoader isLoading={true} />;
}