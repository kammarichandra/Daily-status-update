import React from 'react'
import Hoc2 from '../../components_13-07-2026/Hoc2_28-07-2026/Hoc2'
import Greeting from "../../components_13-07-2026/Hoc2_28-07-2026/Greeting"
import Authentication from "../../components_13-07-2026/Hoc2_28-07-2026/Authentication"
import Loading from "../../components_13-07-2026/Hoc2_28-07-2026/Loading"
function Hoc2Page() {
  return (
    <div>
        <Hoc2/>
        <hr />
        <h1>Greeting msg</h1>
        <Greeting/>
        <hr />
        <h1>user authuntication </h1>
        <Authentication/>
        <hr />
        <h1>Loading state</h1>
        <Loading/>
    </div>
  )
}

export default Hoc2Page;