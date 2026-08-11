function Header({ employeeCount, onAddEmployee }) {
  return (
    <header className="header">
      <div>
        <h1>👨‍💼 Employee Dashboard</h1>
        <p>Manage your employees</p>
      </div>

      <div className="header-right">

        <span className="employee-count">  <i class="fa-solid fa-users"></i> {employeeCount} Employees  </span>

        <button className="add-button" onClick={onAddEmployee} > <i class="fa-thin fa-user"></i> Add Employee </button>

      </div>

    </header>
  );
}

export default Header;