import React from 'react'
import NormalComponent from '../../components_13-07-2026/Pure Components_29-07-2026/NormalComponent'
import ShallowComparison from "../../components_13-07-2026/Pure Components_29-07-2026/ShallowComparison"
function PureComponentPage() {
  return (
    <div>
        <h1>Normal Comparison</h1>
        <NormalComponent/>
        <hr />
        <h1>Shallow Comparison</h1>
        <ShallowComparison/>
    </div>
  )
}

export default PureComponentPage;