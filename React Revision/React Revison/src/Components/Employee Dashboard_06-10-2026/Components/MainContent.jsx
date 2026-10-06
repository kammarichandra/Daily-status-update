import React from 'react'
import EmployeeList from './EmployeeList';
import Employeestats from './Employeestats';
function MainContent({employee}) {
  return (
    <main>

      <Employeestats />

      <EmployeeList employee={employee} />

    </main>
  )
}

export default MainContent