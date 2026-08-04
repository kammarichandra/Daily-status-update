import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        flexWrap: "wrap",
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

      <Link to="/products" style={{ color: "white" }}>
        Products
      </Link>

      <Link to="/careers" style={{ color: "white" }}>
        Careers
      </Link>

      <Link to="/login" style={{ color: "white" }}>
        Login
      </Link>

      <Link to="/dashboard" style={{ color: "white" }}>
        Dashboard
      </Link>
    </nav>
  )
}

export default Navbar