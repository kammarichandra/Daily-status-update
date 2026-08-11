import React from 'react'

function DMPfilter({ department, setDepartment }) {

    let departments = [
        "All",
        "IT",
        "HR",
        "Finance",
        "Marketing",
        "Sales",
    ];

    return (
        <div className="filter-container">
          <label>Department:</label>

          <select
            value={department}
            onChange={(event) =>
              setDepartment(event.target.value)
            }
          >
            {departments.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
    )

}

export default DMPfilter