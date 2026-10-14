import React from 'react'
import Dashboard from '../../Components/Performance Optimization_14-10-2026/React Memo/Dashboard'
import EmployeeDashboard from '../../Components/Performance Optimization_14-10-2026/Use Memo/EmpDashboard'

function ReactMemoPage() {
  return (
    <div>
        <Dashboard/>
        <h3>Use Memo : </h3>
        <EmployeeDashboard/>
    </div>
  )
}

export default ReactMemoPage