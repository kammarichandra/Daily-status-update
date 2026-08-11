import React, { useEffect, useState } from 'react'
import DMPfilter from '../../Components_10-08-2026/Employee Managment Dashboard_11-08-2026/Components/DMPfilter'
import EmpForm from '../../Components_10-08-2026/Employee Managment Dashboard_11-08-2026/Components/EmpForm'
import EmpList from '../../Components_10-08-2026/Employee Managment Dashboard_11-08-2026/Components/EmpList'
import Header from '../../Components_10-08-2026/Employee Managment Dashboard_11-08-2026/Components/Header'
import Searchbar from '../../Components_10-08-2026/Employee Managment Dashboard_11-08-2026/Components/Searchbar'
import ErrorMsg from '../../Components_10-08-2026/Employee Managment Dashboard_11-08-2026/Components/ErrorMsg'
import Loading from '../../Components_10-08-2026/Employee Managment Dashboard_11-08-2026/Components/Loading'
import { getEmployees } from '../../Components_10-08-2026/Employee Managment Dashboard_11-08-2026/Service/EmpApi'

function EmpPage() {

  // Employees from API
  let [employees, setEmployees] = useState([]);

  // Search text
  let [searchTerm, setSearchTerm] = useState("");

  // Selected department
  let [department, setDepartment] = useState("All");

  // Loading state
  let [loading, setLoading] = useState(true);

  // Error state
  let [error, setError] = useState("");

  // Show/hide employee form
  let [showForm, setShowForm] = useState(false);

   // Fetch employees
  let fetchEmployees = async () => {

    try {

      setLoading(true);
      setError("");

      let data = await getEmployees();

      setEmployees(data);

    } 
    catch (err) {
      setError(err.message);
    } 
    finally {
      setLoading(false);
    }

  };

  // these Run when component loads

  useEffect(() => {
    fetchEmployees();
  }, []);


  // Add employee
  let handleAddEmployee = (newEmployee) => {
    setEmployees((previousEmployees) => [
      ...previousEmployees,
      newEmployee,
    ]);
  };

  // Delete employee
  let handleDeleteEmployee = (employeeId) => {

    let confirmed = window.confirm("Are you sure you want to delete this employee?");

    if (!confirmed) {
      return;
    }

    setEmployees((previousEmployees) =>
      previousEmployees.filter(
        (employee) => employee.id !== employeeId
      )
    );
  };


   // Search & department filtering
  let filteredEmployees = employees.filter(

    (employee) => {
      let matchesSearch =
        employee.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        employee.email
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      let matchesDepartment =
        department === "All" ||
        employee.department === department;

      return ( matchesSearch && matchesDepartment );

    }

  );

  return (

     <div className="app">

      <Header employeeCount={employees.length} onAddEmployee={() => setShowForm(true)} />

      <div className="controls">

        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <DMPfilter department={department} setDepartment={setDepartment} />

      </div>

      {loading && <Loading />}

      {!loading && error && (

        <ErrorMsg message={error} onRetry={fetchEmployees} />

      )}

      {!loading && !error && (

        <EmpList employees={filteredEmployees} onDelete={handleDeleteEmployee} />

      )}

      {showForm && (

        <EmpForm onAddEmployee={handleAddEmployee} onClose={() => setShowForm(false)} />

      )}

    </div>

  )
}

export default EmpPage