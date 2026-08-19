import React from 'react'
import Navbar from '../../Components_10-08-2026/Advance State Managment_19-08-2026/Navbar'
import ContextApi from '../../Components_10-08-2026/Advance State Managment_19-08-2026/ContextApi'
import Counter from '../../Components_10-08-2026/Advance State Managment_19-08-2026/Counter'
function AdvanceStateManagmentPage() {

  return (
   <>
    <ContextApi>
        <Navbar/>
    </ContextApi>
    <hr />
    <h1>using usereducer </h1>
    <Counter/>
   </>
  )
}

export default AdvanceStateManagmentPage