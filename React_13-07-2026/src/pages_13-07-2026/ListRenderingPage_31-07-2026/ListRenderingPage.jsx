import React from 'react'
import Key from '../../components_13-07-2026/ListRendering_31-07-2026/Key'
import ConditionalRendering from '../../components_13-07-2026/ListRendering_31-07-2026/ConditionalRendering'
import NestedList from '../../components_13-07-2026/ListRendering_31-07-2026/NestedList'
import UsingMap from '../../components_13-07-2026/ListRendering_31-07-2026/UsingMap'
import CombiningListsconditions from '../../components_13-07-2026/ListRendering_31-07-2026/CombiningListsconditions'
function ListRenderingPage() {
  return (
    <div>
        <h1>using key</h1>
        <Key/>
        <hr />
        <h1>Conditional Rendering</h1>
        <ConditionalRendering/>
        <hr />
        <h1>Nested List</h1>
        <NestedList/>
        <hr />
        <h1>UsingMap</h1>
        <UsingMap/>
        <hr />
        <h1>CombiningLists & conditions</h1>
        <CombiningListsconditions/>
    </div>
  )
}

export default ListRenderingPage