import { useState, useMemo, useCallback } from "react";
import employeesData from "../data/Employees";
import Pagination from "../Components/Pagination";
import EmpCard from "../Components/EmpCard";

function EmpList() {

  const [employees, setEmployees] = useState(employeesData);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const employeesPerPage = 3;

  // useMemo: Filter and sort employees

  const filteredEmployees = useMemo(() => {

    console.log("Filtering and sorting employees");

    let result = employees.filter((employee) => {

      const matchesSearch = employee.name.toLowerCase().includes(search.toLowerCase());

      const matchesDepartment = department === "All" || employee.department === department;

      return matchesSearch && matchesDepartment;


    });

    result.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.salary - b.salary;
      }

      return b.salary - a.salary;
    });

    return result;
  }, [employees, search, department, sortOrder]);


  // useCallback: Keep function reference stable

  const handleDelete = useCallback((id) => {

    setEmployees((previousEmployees) =>
      previousEmployees.filter((employee) => employee.id !== id)
    );
  }, []);

  const totalPages = Math.max( 1, Math.ceil(filteredEmployees.length / employeesPerPage) );

  const currentEmployees = useMemo(() => {
    const startIndex = (currentPage - 1) * employeesPerPage;

    return filteredEmployees
    .slice( startIndex, startIndex + employeesPerPage );
  }, [filteredEmployees, currentPage]);

  return (
    <div className="container">
      <h2>Employee List</h2>

      {/* Search */}
      <input type="text" placeholder="Search employee..." value={search}
        onChange={(event) => {
          setSearch(event.target.value);
          setCurrentPage(1);
        }}
      />

      {/* Department Filter */}
      <select value={department} onChange={(event) => {
          setDepartment(event.target.value);
          setCurrentPage(1);
        }}
      >
        <option value="All">All Departments</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
      </select>

      {/* Sorting */}
      <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)} >
        <option value="asc">Salary: Low to High</option>
        <option value="desc">Salary: High to Low</option>
      </select>

      {/* Employee Cards */}
      <div className="employee-list">
        {currentEmployees.map((employee) => (
          <EmpCard
            key={employee.id}
            employee={employee}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {filteredEmployees.length === 0 && (
        <p>No employees found.</p>
      )}

      {/* Pagination */}
      <Pagination currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default EmpList;