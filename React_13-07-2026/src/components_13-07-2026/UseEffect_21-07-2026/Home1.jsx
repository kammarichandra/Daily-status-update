import React from 'react'
import WithDependency from './WithDependency'
import WithEmptyDependency from './WithEmptyDependency'
import WithoutDependency from './WithoutDependency'
import Cleanup from './Cleanup'
// import CleanupRerunning from './CleanupRerunning'
import MultipleDependency from './MultipleDependency'
import CleanupRerunning from './CleanupRe-running';
// import WithoutDependency from './WithoutDependency'

function Home1() {
  return (
    <div>
        <h1>with dependency</h1>
        <WithDependency/>
        <h1>with Empty dependency</h1>
        <WithEmptyDependency/>
        <h1>without dependency</h1>
        <WithoutDependency/>
        <h1>Cleanup with timer </h1>
        <Cleanup/>
        <h1>CleanupRerunning</h1>
        <CleanupRerunning/>
        <h1>MultipleDependency</h1>
        <MultipleDependency/>
    </div>
  )
}

export default Home1