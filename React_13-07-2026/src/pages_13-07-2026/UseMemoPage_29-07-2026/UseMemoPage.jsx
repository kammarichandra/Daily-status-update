import React from 'react'
import WithoutUseMemo from '../../components_13-07-2026/UseMemo_29-07-2026/WithoutUseMemo'
import WithUseMemo from '../../components_13-07-2026/UseMemo_29-07-2026/WithUseMemo'
import Factorial from '../../components_13-07-2026/UseMemo_29-07-2026/Factorial'
import FilteringLargeList from '../../components_13-07-2026/UseMemo_29-07-2026/FilteringLargeList'
function UseMemoPage() {

  return (
    <div>
        <h1>Without UseMemo</h1>
        <WithoutUseMemo/>
        <hr />
        <h1>With UseMemo </h1>
        <WithUseMemo/>
        <hr />
        <h1>factorial</h1>
        <Factorial/>
        <hr />
        <h1>Filtering Large list </h1>
        <FilteringLargeList/>
    </div>
  )

}

export default UseMemoPage