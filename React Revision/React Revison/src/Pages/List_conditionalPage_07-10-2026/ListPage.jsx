import React from 'react'
import List from '../../Components/List_conditional Rendering_07-10-2026/List'
import EmployeeList from '../../Components/List_conditional Rendering_07-10-2026/EmployeeList'
import Conditional from '../../Components/List_conditional Rendering_07-10-2026/Conditional'
import LoginUi from '../../Components/List_conditional Rendering_07-10-2026/LoginUi'

function ListPage() {
  return (
    <div>
        <List/><br />
        <EmployeeList/><br />
        <Conditional/><br />
        <LoginUi/>
    </div>
  )
}

export default ListPage