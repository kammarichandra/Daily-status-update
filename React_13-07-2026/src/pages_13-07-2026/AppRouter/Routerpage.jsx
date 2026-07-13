import { Routes, Route, Link } from "react-router-dom";
import Home from "../redux_13-07-2026/reduxpage";
import About from "../redux_13-07-2026/About";

function AppRouter() {
  return (
    <>
      <nav>
        <Link to="">Home</Link> |{" "}
        <Link to="about">About</Link>
      </nav>

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default AppRouter;