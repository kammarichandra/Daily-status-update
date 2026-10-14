import { useState, useMemo, useCallback } from "react";
import allEmployees from "../data/Emp";
import SummaryCards from "../components/SummaryCards";
import EmployeeRow, {
  MemoEmployeeRow,
} from "../components/Emprow";
import Empfilter from "../components/Empfilter";

function EmpDashboard() {
  const [employees, setEmployees] = useState(() => allEmployees);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [sortBy, setSortBy] = useState("id");
  const [page, setPage] = useState(1);
  const [counter, setCounter] = useState(0);
  const [optimized, setOptimized] = useState(true);

  const pageSize = 50;

  console.count("EmployeeDashboard rendered");

  // In baseline mode, an unrelated counter change forces recalculation.
  const benchmarkTrigger = optimized ? 0 : counter;

  const filteredEmployees = useMemo(() => {
    console.time("Filter and sort");

    const query = search.trim().toLowerCase();

    const result = employees.filter((employee) => {
      const matchesSearch =
        employee.name.toLowerCase().includes(query) ||
        employee.email.toLowerCase().includes(query) ||
        String(employee.id).includes(query);

      const matchesDepartment =
        department === "All" ||
        employee.department === department;

      return matchesSearch && matchesDepartment;
    });

    result.sort((a, b) => {
      let comparison;

      if (sortBy === "salary" || sortBy === "id") {
        comparison = a[sortBy] - b[sortBy];
      } else {
        comparison = String(a[sortBy]).localeCompare(
          String(b[sortBy])
        );
      }

      return comparison;
    });

    console.timeEnd("Filter and sort");
    return result;
  }, [
    employees,
    search,
    department,
    sortBy,
    benchmarkTrigger,
  ]);

  const stats = useMemo(() => {
    console.time("Calculate summary statistics");

    const totalSalary = filteredEmployees.reduce(
      (total, employee) => total + employee.salary,
      0
    );

    const activeCount = filteredEmployees.filter(
      (employee) => employee.status === "Active"
    ).length;

    const result = {
      count: filteredEmployees.length,
      totalSalary,
      averageSalary:
        filteredEmployees.length > 0
          ? totalSalary / filteredEmployees.length
          : 0,
      activeCount,
    };

    console.timeEnd("Calculate summary statistics");
    return result;
  }, [filteredEmployees]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredEmployees.length / pageSize)
  );

  const currentPage = Math.min(page, totalPages);

  const visibleEmployees = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredEmployees.slice(start, start + pageSize);
  }, [filteredEmployees, currentPage]);

  const handleEdit = useCallback((id) => {
    const employee = employees.find((item) => item.id === id);

    if (employee) {
      window.alert(`Edit employee: ${employee.name}`);
    }
  }, [employees]);

  const handleDelete = useCallback((id) => {
    setEmployees((previous) =>
      previous.filter((employee) => employee.id !== id)
    );
    setPage(1);
  }, []);

  const handleSearch = useCallback((value) => {
    setSearch(value);
    setPage(1);
  }, []);

  const handleDepartment = useCallback((value) => {
    setDepartment(value);
    setPage(1);
  }, []);

  const handleSort = useCallback((value) => {
    setSortBy(value);
    setPage(1);
  }, []);

  const RowComponent = optimized
    ? MemoEmployeeRow
    : EmployeeRow;

  return (
    <main className="dashboard">
      <h1>TeamSync Employee Analytics</h1>

      <div className="mode-switch">
        <label>
          <input
            type="checkbox"
            checked={optimized}
            onChange={(event) => {
              setOptimized(event.target.checked);
              setPage(1);
            }}
          />
          Enable optimizations
        </label>

        <span>
          Mode: {optimized ? "Optimized" : "Baseline"}
        </span>
      </div>

      <SummaryCards stats={stats} />

      <Empfilter
        search={search}
        onSearchChange={handleSearch}
        department={department}
        onDepartmentChange={handleDepartment}
        sortBy={sortBy}
        onSortChange={handleSort}
      />

      <div className="benchmark">
        <span>
          Matching employees: {stats.count}
        </span>

        <span>Showing {visibleEmployees.length} rows per page</span>

        <button onClick={() => setCounter((value) => value + 1)}>
          Test unrelated update ({counter})
        </button>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {visibleEmployees.map((employee) => (
              <RowComponent key={employee.id} employee={employee} onEdit={handleEdit} onDelete={handleDelete} />
            ))}
          </tbody>
        </table>

        {visibleEmployees.length === 0 && (
          <p className="empty">No employees found.</p>
        )}
      </div>

      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setPage((value) => value - 1)}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setPage((value) => Math.min(totalPages, value + 1))
          }
        >
          Next
        </button>
      </div>
    </main>
  );
}

export default EmpDashboard;