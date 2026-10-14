function Empfilter({
  search,
  onSearchChange,
  department,
  onDepartmentChange,
  sortBy,
  onSortChange,
}) {
  console.count("EmployeeFilters rendered");

  return (
    <section className="filters">
      <input value={search} onChange={(e) => onSearchChange(e.target.value)} placeholder="Search by name, email, or ID" aria-label="Search employees"/>

      <select value={department} onChange={(e) => onDepartmentChange(e.target.value)} aria-label="Filter department" >
        <option value="All">All Departments</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
        <option value="Marketing">Marketing</option>
        <option value="Operations">Operations</option>
      </select>

      <select value={sortBy} onChange={(e) => onSortChange(e.target.value)} aria-label="Sort employees" >

        <option value="id">Sort by ID</option>
        <option value="name">Sort by Name</option>
        <option value="salary">Sort by Salary</option>
        <option value="department">Sort by Department</option>
        
      </select>
    </section>
  );
}

export default Empfilter;