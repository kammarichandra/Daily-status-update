import React from 'react'
import Suspense from '../../components_13-07-2026/Lazy Loading_31-07-2026/Suspense1'
import LazyHome from '../../components_13-07-2026/Lazy Loading_31-07-2026/LazyHome'
import MainHome from '../../components_13-07-2026/Multiple Components_31-07-2026/MainHome'
// import ReactRouter from '../../components_13-07-2026/Multiple Components_31-07-2026/ReactRouter'


function LazyLoadingPage() {
  return (
    <div>
        <h1>Suspense</h1>
        <Suspense/>
        <hr />
        <h1>lazy Home</h1>
        <LazyHome/>
        <hr />
        <h1>Main Home</h1>
        <MainHome/>
        <hr />
        {/* <h1>React Router</h1>
        <ReactRouter/> */}
    </div>
  )
}

export default LazyLoadingPage