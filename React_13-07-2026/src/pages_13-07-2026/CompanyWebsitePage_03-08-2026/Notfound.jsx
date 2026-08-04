import { Link } from "react-router-dom";

function NotFound() {

  return (

    <div style={{textAlign:"center"}}>

      <h1>404</h1>

      <h2>This page doesn't exist.</h2>

      <p>The page you are looking for may have been moved or removed.</p>

      <Link to="/">
        Back to Home
      </Link>

    </div>

  );

}

export default NotFound;