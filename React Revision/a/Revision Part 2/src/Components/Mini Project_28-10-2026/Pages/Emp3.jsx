import { useState, useMemo, useCallback } from "react";
import { useEmployees } from "../Context/EmpContext";
import EmpCard from "../Components/Empcard";



function Emp3() {
  const { employees, dispatch } = useEmployees();

  const [search, setSearch] = useState("");

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [employees, search]);

  const deleteEmployee = useCallback((id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }, [dispatch]);

  return (
    <div>
      <h2>Employee List</h2>

      <input
        type="text"
        placeholder="Search employee"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredEmployees.map((employee) => (
        <EmpCard
          key={employee.id}
          employee={employee}
          onDelete={deleteEmployee}
        />
      ))}
    </div>
  );
}

export default Emp3;