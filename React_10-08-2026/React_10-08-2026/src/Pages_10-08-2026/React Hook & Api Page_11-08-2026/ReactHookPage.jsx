import React from 'react'
import UseState from '../../Components_10-08-2026/React Hooks & Api Calls_11-08-2026/UseState'
import UseEffect from '../../Components_10-08-2026/React Hooks & Api Calls_11-08-2026/UseEffect'
import ApiCalls from '../../Components_10-08-2026/React Hooks & Api Calls_11-08-2026/ApiCalls'
import LoadingErrorHandling from '../../Components_10-08-2026/React Hooks & Api Calls_11-08-2026/LoadingErrorHandling'
import Useref from "../../Components_10-08-2026/React Hooks & Api Calls_11-08-2026/Useref"

function ReactHookPage() {
  return (

    <div>
        <h1>React Hook & Api Calls</h1>

        <h2>UseState</h2>
        <UseState/>
        <hr />

        <h2>UseEffect</h2>
        <UseEffect/>
        <hr />
        
        <h2>ApiCalls</h2>
        <ApiCalls/>
        <hr />

        <h2>Loading & ErrorHandling</h2>
        <LoadingErrorHandling/>
        <hr />

        <h2>Useref</h2>
        <Useref/>
        <hr />
        
    </div>
    
  )
}

export default ReactHookPage