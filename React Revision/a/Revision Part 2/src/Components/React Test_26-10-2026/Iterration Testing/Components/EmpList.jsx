import { useContext, useState } from "react";
import { EmployeeContext } from "../Context/EmpContext";
import EmpForm from "./EmpForm";


function EmpList() {
  const { employees, dispatch } =
    useContext(EmployeeContext);

  const [search, setSearch] = useState("");

  const addEmployee = (employee) => {
    dispatch({
      type: "ADD",
      payload: employee,
    });
  };

  const deleteEmployee = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Employee List</h2>

      <EmpForm onAdd={addEmployee} />

      <input placeholder="Search Employee" value={search} onChange={(e) => setSearch(e.target.value)} />

      {filteredEmployees.map((emp) => (
        <div key={emp.id}>
          <p>{emp.name}</p>
          <p>{emp.role}</p>

          <button onClick={() => deleteEmployee(emp.id)} >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default EmpList;