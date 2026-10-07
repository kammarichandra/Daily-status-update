import React from 'react'
import Events from '../../Components/Events_forms_07-10-2026/Events'
import Registration from '../../Components/Events_forms_07-10-2026/Registration'
import Dynamic from '../../Components/Events_forms_07-10-2026/Dynamic'

function Events_formsPage() {
  return (
    <div>
        <h2>Events : </h2>
        <Events/>
        <br />
        <h2>Registration Form</h2>
        <Registration/>
        <br />
        <Dynamic/>
    </div>
  )
}

export default Events_formsPage