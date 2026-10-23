import { useState } from "react";
import { Link } from "react-router-dom";
import useEmp from "../Hooks/UseEmp";


function EmpList() {
  const { employees, dispatch } = useEmp();

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch = emp.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" ||
      emp.department === department;

    return matchesSearch && matchesDepartment;
  });

  function handleDelete(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }

  return (
    <div>
      <h2>Employee List</h2>

      <Link to="/portal/add">
        <button>Add Employee</button>
      </Link>

      <br />

      <input placeholder="Search employee" value={search} onChange={(e) => setSearch(e.target.value)} />

      <select value={department} onChange={(e) => setDepartment(e.target.value)} >
        <option value="All">All Departments</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
      </select>

      {filteredEmployees.map((emp) => (
        <div key={emp.id}>
          <h3>{emp.name}</h3>
          <p>{emp.department}</p>
          <p>{emp.email}</p>

          <Link to={`/portal/employees/${emp.id}`}>
            View Details
          </Link>

          <button onClick={() => handleDelete(emp.id)}>
            Delete
          </button>

          <Link to={`/portal/edit/${emp.id}`}>
            Edit
          </Link>
        </div>
      ))}
    </div>
  );
}

export default EmpList;