
import Dashboard from "./Components/Dashboard";
import EmpList from "./Components/EmpList";


function MainEmp() {
  return (
    <main className="container">
      <header>
        <h1>TeamSync Employee Portal</h1>
        <p>Manage employees from one centralized store.</p>
      </header>

      <Dashboard />
      <EmpList />
    </main>
  );
}

export default MainEmp;
