import React from 'react'
import LSE from "../../components_13-07-2026/HandlingLSE_27-07-2026/LSE"
import Map from '../../components_13-07-2026/Map_27-07-2026/Map'
import UseEffect2 from '../../components_13-07-2026/UseEffect2_27-2026/UseEffect2'
function LSEPage() {
  return (
    <div>
        <h1>Loading , Success and Error</h1>
        <LSE/>
        <hr />
        <h1>using Map</h1>
        <Map/>
        <hr />
        <h1>Using Use effect </h1>
        <UseEffect2/>
    </div>
  )
}

export default LSEPage;