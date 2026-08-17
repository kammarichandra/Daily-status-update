import React from 'react'
import ControlledComponents from '../../Components_10-08-2026/React Form Handling & Validatiion_17-08-2026/ControlledComponents'
import FormHandling from '../../Components_10-08-2026/React Form Handling & Validatiion_17-08-2026/FormHandling'
import FormValidation from '../../Components_10-08-2026/React Form Handling & Validatiion_17-08-2026/FormValidation'
import DynamicForm from '../../Components_10-08-2026/React Form Handling & Validatiion_17-08-2026/DynamicForm'
function ReactFormPage() {
  return (
    <div>
        <h1>Controlled and Uncontrolled Components</h1>
        <ControlledComponents/>
        <hr />
        <h1>Form Handling </h1>
        <FormHandling/>
        <hr />
        <h1>Form Validation </h1>
        <FormValidation/>
        <hr />
        <h1>Dynamic Form handling </h1>
        <DynamicForm/>

    </div>
  )
}

export default ReactFormPage