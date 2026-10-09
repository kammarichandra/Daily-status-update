import React from 'react'
import Header from '../../Components/Revision_09-10-2026/Components/Header'
import Profile from '../../Components/Revision_09-10-2026/Jsx/Profile'
import EmployeeDetails from '../../Components/Revision_09-10-2026/Props/EmployeeDetails'
import Counter from '../../Components/Revision_09-10-2026/State_useState/Counter'

function RevisionPage() {
  return (
    <div>
        <h2>Components</h2>
        <Header/>
        <br />

        <h2>Jsx</h2>
        <Profile/>
        <br />

        <h2>Props</h2>
        <EmployeeDetails/>
        <br />

        <h2>State & Usestate</h2>
        <Counter/>
    </div>
  )
}

export default RevisionPage