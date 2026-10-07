import React from 'react'
import EmployeeList from './EmployeeList';
import List from './List';

function LoginUi() {
    let isLoggedin = false;

  return (
    <div>
        <h2> Login Ui Conditional rendering</h2>
        {isLoggedin ?(<EmployeeList/>):(<List/>)}
    </div>
  )
}

export default LoginUi