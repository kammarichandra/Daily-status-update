import React from 'react'
import { memo } from 'react';

function EmpCard({employee , onEdit , onDelete , onStatusChange}) {
    console.log("emp card rendered : " , employee.name);

  return (
     <div className="employee-card">
      <h3>{employee.name}</h3>

      <p>Department: {employee.department}</p>
      <p>Salary: ₹{employee.salary}</p>

      <p> Status: <strong>{employee.status}</strong></p>

      <div className="actions">

        <button onClick={() => onEdit(employee.id)}> Edit</button>

        <button onClick={() => onDelete(employee.id)}> Delete </button>

        <button onClick={() =>onStatusChange(employee.id) }> Toggle Status </button>

      </div>
    </div>
  )
}

export default memo(EmpCard);