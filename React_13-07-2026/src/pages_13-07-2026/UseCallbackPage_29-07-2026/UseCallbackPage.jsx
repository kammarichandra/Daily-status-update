import React from 'react'
import WithUseCallback from '../../components_13-07-2026/UseCallback_29-07-2026/WithUseCallback'
import WithoutUseCallback from '../../components_13-07-2026/UseCallback_29-07-2026/WithoutUseCallback'
import MultipleButtons from '../../components_13-07-2026/UseCallback_29-07-2026/MultipleButtons'

function UseCallbackPage() {
  return (

    <div>
        <h1> With Use Callback </h1>
        <WithUseCallback/>
        <hr />
        <h1> Without Use Callback </h1>
        <WithoutUseCallback/>
        <hr />
        <h1> Multiple Components</h1>
        <MultipleButtons/>
    </div>

  )
}

export default UseCallbackPage