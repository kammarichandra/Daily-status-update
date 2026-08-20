import React from 'react'
import ReactMemo from '../../Components_10-08-2026/Performence & Optimization_20-08-2026/ReactMemo'
import UseMemo from '../../Components_10-08-2026/Performence & Optimization_20-08-2026/UseMemo'
import UseCallback from '../../Components_10-08-2026/Performence & Optimization_20-08-2026/UseCallback'
import Lazyloading from '../../Components_10-08-2026/Performence & Optimization_20-08-2026/Lazyloading'
function PerformencePage1() {
  return (
    <div>
        <ReactMemo/>
        <hr />
        <UseMemo/>
        <hr />
        <UseCallback/>
        <hr />
        <Lazyloading/>
    </div>
  )
}

export default PerformencePage1