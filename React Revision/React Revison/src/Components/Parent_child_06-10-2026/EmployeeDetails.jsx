import React from 'react'

function EmployeeDetails({id,dept,role,sal}) {
  return (
    <div>
        <p>Employee id : {id}</p>
        <p>Department : {dept}</p>
        <p>Role : {role}</p>
        <p>Sallary : {sal}</p>
    </div>
  )
}

export default EmployeeDetails