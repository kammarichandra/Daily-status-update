import { useState, useMemo, useCallback } from "react";

import UseEmployee from "../Hooks/UseEmployee";
import EmployeeList from "../Components/EmployeeList";
import AddEmployee from "../Components/AddEmployee";
import Modal from "../Components/Modal";
import Navbar from "./Navbar";
// import EmployeeDetails from "../Components/EmployeeDetails";
import withAuth from "../Hoc/WithAuth";
import Reports from "./Reports";
function Dashboard() {

  const [employees, setEmployees] = UseEmployee();

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedPage, setSelectedPage] = useState("dashboard");

  const filteredEmployees = useMemo(() => {

    return employees.filter((employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [employees, search]);

  const deleteEmployee = useCallback((id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  }, []);

  const addEmployee = (employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  return (
    <>
      <Navbar
        selected={selectedPage}
        setSelected={setSelectedPage}
      />

      <div className="container">

        {selectedPage === "dashboard" && (
          <>
            <h1>Employee Dashboard</h1>

            {/* Dashboard Cards */}

            <div className="cards">
              <div className="card">
                <h2>{employees.length}</h2>
                <p>Total Employees</p>
              </div>

              <div className="card">
                <h2>{employees.length}</h2>
                <p>Active Employees</p>
              </div>

              <div className="card">
                <h2>5</h2>
                <p>Departments</p>
              </div>
            </div>

            {/* <input type="text" placeholder="Search Employee" value={search} onChange={(e) => setSearch(e.target.value)} /> */}

            <button onClick={() => setShowModal(true)}> View Modal </button>

            {/* <AddEmployee addEmployee={addEmployee} /> */}

            {/* <EmployeeList employees={filteredEmployees} deleteEmployee={deleteEmployee} /> */}

          </>
        )}

        {selectedPage === "details" && ( <EmployeeList employees={employees} /> )}

        {selectedPage === "Add Emp" && ( showModal && <Modal closeModal={() => setShowModal(false)} /> )}

        {selectedPage === "reports" && ( <Reports/>)}

        {showModal && ( <Modal closeModal={() => setShowModal(false)} />)}

      </div>
    </>
  );
}

export default withAuth(Dashboard);