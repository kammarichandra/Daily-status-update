import React from 'react'
import MemoCoponent from "../../components_13-07-2026/ReactMemo_27-07-2026/MemoComponent";
import NormalComponent from "../../components_13-07-2026/ReactMemo_27-07-2026/NormalComponent";
import WithProps from "../../components_13-07-2026/ReactMemo_27-07-2026/WithProps";
import WithObject from "../../components_13-07-2026/ReactMemo_27-07-2026/WithObject"
function ReactMemoPage() {
  return (
    <div>
        <h1>Normal Component</h1>
        <NormalComponent/>
        <hr />
        <h1>Memo Component</h1>
        <MemoCoponent/>
        <hr />
        <h1>With Props</h1>
        <WithProps/>
        <hr />
        <h1>with object</h1>
        <WithObject/>
    </div>
  )
}

export default ReactMemoPage;