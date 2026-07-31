import React, { lazy } from 'react'
import { Suspense } from 'react'
import ReactLazy from './ReactLazy'
let Home = lazy(() => import("./ReactLazy"))

function LazyHome() {
    return (
        <div>
            <Suspense fallback={<h2>Loading...</h2>}>

                <ReactLazy />
            </Suspense>
        </div>
    )
}

export default LazyHome;