import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>The requested page does not exist.</p>

      <Link to="/dashboard">
        Go to Dashboard
      </Link>
    </div>
  );
}

export default Notfound;