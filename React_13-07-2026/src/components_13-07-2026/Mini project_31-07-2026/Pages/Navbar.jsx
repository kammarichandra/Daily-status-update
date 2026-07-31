// import "./Navbar.css";

function Navbar({ selected, setSelected }) {
  return (
    <nav className="navbar">
      <div className="logo">
        Employee Managment System 
      </div>

      <ul>
        <li
          className={selected === "dashboard" ? "active" : ""}
          onClick={() => setSelected("dashboard")}
        >
          Dashboard
        </li>

        <li
          className={selected === "details" ? "active" : ""}
          onClick={() => setSelected("details")}
        >
          Employee Details
        </li>

        <li
          className={selected === "reports" ? "active" : ""}
          onClick={() => setSelected("reports")}
        >
          Reports
        </li>
        <li
          className={selected === "Add Emp" ? "Add Emp" : ""}
          onClick={() => setSelected("Add Emp")}
        >
          Add Emp
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;