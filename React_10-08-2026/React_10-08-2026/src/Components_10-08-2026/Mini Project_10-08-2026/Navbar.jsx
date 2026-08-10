import { Link } from "react-router";

function Navbar() {
    return (
        <nav>

            <h2>React Router App</h2>

            <Link to="/"> Home </Link>

            <Link to="/about"> About </Link>

            <Link to="/dashboard"> Dashboard </Link>

            <Link to="/login"> Login </Link>

        </nav>
    );
}

export default Navbar;