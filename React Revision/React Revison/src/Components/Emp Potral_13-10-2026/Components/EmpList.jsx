
import { useMemo, useState } from "react";
import { useEmployees } from "../Context/EmpContext";
import EmpForm from "./EmpForm";



function EmpList() {
  const { state, dispatch } = useEmployees();
  const [editingEmployee, setEditingEmployee] = useState(null);

  const filteredEmployees = useMemo(() => {
    return state.employees.filter((employee) => {
      const search = state.search.toLowerCase();

      const matchesSearch =
        employee.name.toLowerCase().includes(search) ||
        employee.email.toLowerCase().includes(search);

      const matchesDepartment =
        state.department === "All" ||
        employee.department === state.department;

      const matchesStatus =
        state.status === "All" ||
        employee.status === state.status;

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesStatus
      );
    });
  }, [
    state.employees,
    state.search,
    state.department,
    state.status,
  ]);

  return (
    <section>
      <h2>Employee Management</h2>

      <input type="search"
        placeholder="Search by name or email..."
        value={state.search}
        onChange={(event) =>
          dispatch({
            type: "SET_SEARCH",
            payload: event.target.value,
          })
        }
      />

      <select value={state.department}
        onChange={(event) =>
          dispatch({
            type: "SET_DEPARTMENT",
            payload: event.target.value,
          })
        }
      >
        <option value="All">All Departments</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
        <option value="Marketing">Marketing</option>
      </select>

      <select
        value={state.status}
        onChange={(event) =>
          dispatch({
            type: "SET_STATUS_FILTER",
            payload: event.target.value,
          })
        }
      >
        <option value="All">All Statuses</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <button onClick={() => dispatch({ type: "RESET_FILTERS" })} >
        Clear Filters
      </button>

      <EmpForm editingEmployee={editingEmployee}
        onFinish={() => setEditingEmployee(null)}
      />

      <h3>Employee Records ({filteredEmployees.length})</h3>

      {filteredEmployees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.department}</td>

                  <td>
                    <select
                      value={employee.status}
                      onChange={(event) =>
                        dispatch({
                          type: "UPDATE_STATUS",
                          payload: {
                            id: employee.id,
                            status: event.target.value,
                          },
                        })
                      }
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </td>

                  <td>
                    <button onClick={() => setEditingEmployee(employee) }> Edit </button>

                    <button onClick={() => {
                        if (
                          window.confirm(
                            `Delete ${employee.name}?`
                          )
                        ) {
                          dispatch({
                            type: "DELETE_EMPLOYEE",
                            payload: employee.id,
                          });

                          if (
                            editingEmployee?.id === employee.id
                          ) {
                            setEditingEmployee(null);
                          }
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default EmpList;
