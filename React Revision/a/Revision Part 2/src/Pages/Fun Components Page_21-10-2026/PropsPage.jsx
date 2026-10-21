import React from 'react'
import EmpCard from '../../Components/Props_21-10-2026/EmpCard'
import Counter from '../../Components/Usestate_21-10-2026/Counter'
import Events from '../../Components/EventHandling_21-10-2026/Events'

function PropsPage() {
  return (
    <div className='app'>
        <h1>Employee Managment</h1>

        <div className="container">
            <EmpCard 
            name="chandra shekar"
            role="Devloper"
            sallary={20000}

            />
            <br />
            <EmpCard 
            name="chandra shekar"
            role="Devloper"
            sallary={20000}

            />
            <hr />
            <br />
            <h2>State & Usestate</h2>
            <Counter/>
            <br />
            <Events/>
        </div>
    </div>
  )
}

export default PropsPage