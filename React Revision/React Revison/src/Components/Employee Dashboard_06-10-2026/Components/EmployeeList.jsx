import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeeList({ employee }) {
  return (
    <div>
      <h2>Employee List</h2>
      <EmployeeCard employee={employee} />
    </div>
  );
}

export default EmployeeList;