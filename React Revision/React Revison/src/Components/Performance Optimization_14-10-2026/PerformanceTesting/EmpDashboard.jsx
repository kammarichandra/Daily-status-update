import { useMemo, useState } from "react";
import allEmployees from "./data/emp";
import EmployeeTable from "./components/EmpTable";

function EmployeeDashboard() {
    const [datasetSize, setDatasetSize] = useState("10000");
    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("All");
    const [sortBy, setSortBy] = useState("id");
    const [sortOrder, setSortOrder] = useState("asc");
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState("50");
    const [showAll, setShowAll] = useState(false);

    console.log("EmployeeDashboard rendered");

    const employees = useMemo(() => allEmployees.slice(0, Number(datasetSize)), [datasetSize]);

    const filteredEmployees = useMemo(() => {
        console.time("Filter and sort employees");

        const query = search.trim().toLowerCase();

        const result = employees.filter((employee) => {
            const matchesSearch =
                employee.name.toLowerCase().includes(query) ||
                employee.email.toLowerCase().includes(query) ||
                String(employee.id).includes(query);

            const matchesDepartment = department === "All" ||
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

            return sortOrder === "asc" ? comparison : -comparison;
        });

        console.timeEnd("Filter and sort employees");
        return result;
    }, [employees, search, department, sortBy, sortOrder]);

    const totalPages = Math.max(
        1,
        Math.ceil(filteredEmployees.length / Number(pageSize))
    );

    const currentPage = Math.min(page, totalPages);

    const visibleEmployees = useMemo(() => {
        if (showAll) {
            return filteredEmployees;
        }

        const start = (currentPage - 1) * Number(pageSize);

        return filteredEmployees.slice(
            start,
            start + Number(pageSize)
        );
    }, [filteredEmployees, showAll, currentPage, pageSize]);

    function updateSearch(value) {
        setSearch(value);
        setPage(1);
    }

    function updateDepartment(value) {
        setDepartment(value);
        setPage(1);
    }

    function updateDataset(value) {
        setDatasetSize(value);
        setPage(1);
    }

    return (
        <main className="dashboard">
            <h1>TeamSync Employee Directory</h1>
            <p>Search, filter, sort, and compare large employee lists.</p>

            <section className="toolbar">
                <label>
                    Dataset
                    <select value={datasetSize} onChange={(e) => updateDataset(e.target.value)} >
                        <option value="100">100 employees</option>
                        <option value="1000">1,000 employees</option>
                        <option value="10000">10,000 employees</option>
                    </select>
                </label>

                <label>
                    Search
                    <input value={search} onChange={(e) => updateSearch(e.target.value)} placeholder="Name, email, or ID" />
                </label>

                <label>
                    Department
                    <select value={department} onChange={(e) => updateDepartment(e.target.value)} >
                        <option value="All">All Departments</option>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Operations">Operations</option>
                    </select>
                </label>

                <label>
                    Sort by
                    <select value={sortBy} onChange={(e) => { setSortBy(e.target.value); setPage(1); }} >
                        <option value="id">Employee ID</option>
                        <option value="name">Name</option>
                        <option value="department">Department</option>
                        <option value="salary">Salary</option>
                    </select>
                </label>

                <label>
                    Order
                    <select value={sortOrder} onChange={(e) => { setSortOrder(e.target.value); setPage(1); }} >
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </label>
            </section>

            <section className="summary">
                <strong>Matching employees: {filteredEmployees.length}</strong>

                <label>
                    <input type="checkbox" checked={showAll}
                        onChange={(e) => {
                            setShowAll(e.target.checked);
                            setPage(1);
                        }}
                    />
                    Render all matching rows (comparison mode)
                </label>

                {!showAll && (
                    <label>
                        Rows per page
                        <select
                            value={pageSize}
                            onChange={(e) => {
                                setPageSize(e.target.value);
                                setPage(1);
                            }}
                        >
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </label>
                )}
            </section>

            <EmployeeTable employees={visibleEmployees} />

            {!showAll && (
                <nav className="pagination" aria-label="Employee pages">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                    >
                        Previous
                    </button>

                    <span>
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() =>
                            setPage((p) => Math.min(totalPages, p + 1))
                        }
                    >
                        Next
                    </button>
                </nav>
            )}
        </main>
    );
}

export default EmployeeDashboard;