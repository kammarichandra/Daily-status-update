import React, { useReducer, useState } from 'react'
// intialstate
const initialstate = {
    employee: [
        { id: 1, name: "Rahul", department: "IT" },
        { id: 2, name: "Priya", department: "HR" },
    ]
}

// reduser function 

const empreduser = (state, action) => {
    switch (action.type) {

        case "ADD_EMPLOYEE":
            return {
                ...state,
                employee: [...state.employee, action.payload],
            };

        case "UPDATE_EMPLOYEE":
            return {
                ...state,
                employee: state.employee.map((emp) =>
                    emp.id === action.payload.id ? { ...emp, ...action.payload } : emp
                ),
            };

        case "DELETE_EMPLOYEE":
            return {
                ...state,
                employee: state.employee.filter((emp) => emp.id !== action.payload),
            };

        case "RESET_EMPLOYEES":
            return {
                ...initialstate,
                employee: initialstate.employee.map((emp) => ({
                    ...emp,
                })),
            };

        default:
            return state;
    }
}
function EmpManager() {

    const [state, dispatch] = useReducer(empreduser, initialstate);

    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [editingId, setEditingId] = useState(null);

    const handlesubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !department.trim()) {
            alert("Please enter name and department");
            return;
        }

        if (editingId !== null) {
            dispatch({
                type: "UPDATE_EMPLOYEE",
                payload: {
                    id: editingId,
                    name: name.trim(),
                    department: department.trim(),
                },
            });
            setEditingId(null);
        } else {
            const newEmployee = {
                id: Date.now(),
                name: name.trim(),
                department: department.trim(),
            };

            dispatch({
                type: "ADD_EMPLOYEE",
                payload: newEmployee,
            });
        }

        setName("");
        setDepartment("");
    }

    let handleEdit = (emp) => {

        setEditingId(emp.id);
        setName(emp.name);
        setDepartment(emp.department);

    }

    let handlecancle = () => {
        setEditingId(null);
        setName("");
        setDepartment("");
    }


    return (
       <div style={{ padding: "25px", fontFamily: "Arial" }}>
      <h2>Employee Management</h2>

      {/* Add / Update Form */}
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder="Employee Name" value={name} onChange={(e) => setName(e.target.value)} />

        <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />

        <button type="submit"> {editingId !== null ? "Update Employee" : "Add Employee"} </button>

        {editingId !== null && (
          <button type="button" onClick={handlecancle}> Cancel </button>
        )}
      </form>

      <hr />

      {/* Display Employees */}
      <h3>Employee List</h3>

      {state.employee.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {state.employee.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>
                  <button onClick={() => handleEdit(emp)}> Edit </button>

                  <button onClick={() =>
                      dispatch({
                        type: "DELETE_EMPLOYEE",
                        payload: emp.id,
                      })
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <br />

      {/* Reset Employees */}
      <button onClick={() => {
          dispatch({ type: "RESET_EMPLOYEES" });
          handlecancle();
        }}
      >
        Reset Employees
      </button>
    </div>
    )
}

export default EmpManager