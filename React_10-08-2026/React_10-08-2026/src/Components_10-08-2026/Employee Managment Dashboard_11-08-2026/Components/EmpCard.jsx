import React from 'react'

function EmpCard({ employee, onDelete }) {
  return (
    <div className="employee-card">

      <div className="employee-avatar">
        {employee.name.charAt(0).toUpperCase()}
      </div>

      <div className="employee-info">

        <h3>{employee.name}</h3>

        <p><i class="fa-thin fa-envelope"></i> {employee.email}</p>

        <p><i class="fa-thin fa-phone"></i> {employee.phone}</p>

        <span className="department"> {employee.department} </span>

      </div>

      <button className="delete-button"  onClick={() => onDelete(employee.id)} >

        <i class="fa-regular fa-trash-can"></i> Delete
        
      </button>
    </div>
  )
}

export default EmpCard