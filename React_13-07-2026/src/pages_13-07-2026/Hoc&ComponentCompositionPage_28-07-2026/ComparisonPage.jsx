import React from 'react'
import Hoc from "../../components_13-07-2026/Hoc&ComponentComposition_28-07-2026/Hoc"
import ComponentComposition from "../../components_13-07-2026/Hoc&ComponentComposition_28-07-2026/ComponentComposition"
function ComparisonPage() {
  return (
    <div>
        <h1>Hoc component</h1>
        <Hoc/>
        <hr />
        <h2>Component communication</h2>
        <ComponentComposition/>
    </div>
  )
}

export default ComparisonPage;