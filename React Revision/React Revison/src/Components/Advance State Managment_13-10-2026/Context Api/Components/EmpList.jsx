import { useEmployees } from "../Context/EmpContext";

function EmpList() {
  const { state, dispatch } = useEmployees();

  function handleDelete(id) {
    dispatch({
      type: "DELETE_EMPLOYEE",
      payload: id,
    });
  }

  return (
    <div>
      <h2>Employee List</h2>

      {state.employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {state.employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>
                  <button
                    onClick={() => handleDelete(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmpList;