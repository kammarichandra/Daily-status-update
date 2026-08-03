import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        background: "#0f172a",
      }}
    >
      <Link to="/" style={{ color: "white" }}>
        Home
      </Link>

      <Link to="/about" style={{ color: "white" }}>
        About
      </Link>

      <Link to="/services" style={{ color: "white" }}>
        Services
      </Link>

      <Link to="/contact" style={{ color: "white" }}>
        Contact
      </Link>
    </nav>
  )
}

export default Navbar