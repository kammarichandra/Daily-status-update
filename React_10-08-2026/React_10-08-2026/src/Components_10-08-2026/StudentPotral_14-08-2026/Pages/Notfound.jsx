import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>404 ❌</h1>

      <h2>Page Not Found</h2>

      <p>
        Sorry, the page you are looking for doesn't exist.
      </p>

      <Link to="/">
        <button>Go Back Home</button>
      </Link>
    </div>
  );
}

export default NotFound;