import React from 'react'
import ReactMemo from '../../Components_10-08-2026/performance & Reusable_13-08-2026/ReactMemo'
import Ucallback from '../../Components_10-08-2026/performance & Reusable_13-08-2026/Ucallback'
// import Usememo from '../../Components_10-08-2026/performance & Reusable_13-08-2026/Usememo'
import LazyLoading from '../../Components_10-08-2026/performance & Reusable_13-08-2026/LazyLoading'
import Count from '../../Components_10-08-2026/performance & Reusable_13-08-2026/Count'
import CustomHook from '../../Components_10-08-2026/performance & Reusable_13-08-2026/CustomHook'
import Usememo from './../../Components_10-08-2026/performance & Reusable_13-08-2026/Usememo';

function PerformancePage() {
    let counter =  CustomHook();

  return (
    <div>
        <h1>React Memo</h1>
        <ReactMemo/>
        <hr />

        <h1>Use callback</h1>
        <Ucallback/>
        <hr />

        <h1>use Memo</h1>
        <Usememo/>
        <hr />

        <h1>Lazy Loading </h1>
        <LazyLoading/>
        <hr />

        <h2>Custom Hook</h2>
      <h3>{counter.count}</h3>

      <button onClick={counter.increment}>
        +
      </button>

      <button onClick={counter.decrement}>
        -
      </button>

      <button onClick={counter.reset}>
        Reset
      </button>
    </div>
  )
}

export default PerformancePage