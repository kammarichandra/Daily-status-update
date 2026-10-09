import { useEffect, useState } from "react";
import "../../MiniProject.css";
import useFetch from "./Hooks/UseFetch";
import StatsCards from "./Components/StatsCard";
import EmployeeForm from "./Components/EmployeeForm";
import EmployeeList from "./Components/EmployeeList";
import Header from "./Components/Header";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const departments = [
  "Engineering",
  "HR",
  "Finance",
  "Marketing",
  "Operations"
];

function Emp() {
  const { data, loading, error } = useFetch(API_URL);

  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [notice, setNotice] = useState("");

  // Convert API users into employee records.
  useEffect(() => {
    if (data.length > 0) {
      setEmployees(
        data.map((user, index) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          department: departments[index % departments.length],
          status: "Active"
        }))
      );
    }
  }, [data]);

  function handleSave(employee) {
    if (editingEmployee) {
      setEmployees(prev =>
        prev.map(emp =>
          emp.id === editingEmployee.id
            ? { ...emp, ...employee }
            : emp
        )
      );

      setNotice("Employee updated successfully!");
      setEditingEmployee(null);
    } else {
      const newEmployee = {
        ...employee,
        id: Date.now()
      };

      setEmployees(prev => [newEmployee, ...prev]);
      setNotice("Employee added successfully!");
    }
  }

  function handleEdit(employee) {
    setEditingEmployee(employee);
    setNotice("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmed) return;

    setEmployees(prev => prev.filter(emp => emp.id !== id));

    if (editingEmployee?.id === id) {
      setEditingEmployee(null);
    }

    setNotice("Employee deleted successfully!");
  }

  function handleCancel() {
    setEditingEmployee(null);
  }

  return (
    <div className="app">
      <Header />

      <main className="container">
        <section className="welcome">
          <div>
            <p className="eyebrow">TEAMSYNC WORKSPACE</p>
            <h1>Employee Dashboard</h1>
            <p>Manage your people, all in one place.</p>
          </div>
        </section>

        {notice && (
          <div className="notice" role="status">
            {notice}
            <button onClick={() => setNotice("")}>×</button>
          </div>
        )}

        {loading ? (
          <div className="message">
            <div className="spinner" />
            <p>Loading employees...</p>
          </div>
        ) : error ? (
          <div className="error-panel" role="alert">
            <h3>Unable to load employees</h3>
            <p>{error}</p>
            <p>
              Check your internet connection and reload the page
              to try fetching the sample data again.
            </p>
          </div>
        ) : (
          <>
            <StatsCards employees={employees} />

            <div className="content-grid">
              <EmployeeForm
                editingEmployee={editingEmployee}
                onSave={handleSave}
                onCancel={handleCancel}
              />

              <EmployeeList
                employees={employees}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
          </>
        )}
      </main>

      <footer className="footer">
        TeamSync Employee Management System · React Practice Project
      </footer>
    </div>
  );
}

export default Emp;