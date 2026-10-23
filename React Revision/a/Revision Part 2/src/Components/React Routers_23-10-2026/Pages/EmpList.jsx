
import { Link, useSearchParams,} from "react-router-dom";
import { employees } from "../../../Pages/React Router Page_23-10-2026/Employees";


function EmpList() {

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") ?? "";

  const department = searchParams.get("department") ?? "";

  const filteredEmployees = employees.filter((emp) => {

    const matchesSearch = emp.name.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment = department === "" || emp.department === department;

    return matchesSearch && matchesDepartment;

  });

  const handleSearch = (value)=> {

    setSearchParams((params) => {
      if (value) {
        params.set("search", value);
      } else {
        params.delete("search");
      }

      return params;
    });
  }

  const handleFilter = (value)=> {

    setSearchParams((params) => {

      if (value) {
        params.set("department", value);
      } else {
        params.delete("department");
      }

      return params;
    });
  }

  return (
    <div>
      <h2>Employee List</h2>

      <input type="text" placeholder="Search employee" value={search} onChange={(e) => handleSearch(e.target.value) }/>

      <select value={department} onChange={(e) => handleFilter(e.target.value) } >

        <option value="">All Departments</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>

      </select>

      <ul>
        {filteredEmployees.map((emp) => (
          <li key={emp.id}>

            {emp.name} - {emp.department} {" | "}

            <Link to={`/employees/${emp.id}`}> View Details </Link> {" | "}

            <Link to={`/employees/${emp.id}/edit`}> Edit </Link>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmpList;
