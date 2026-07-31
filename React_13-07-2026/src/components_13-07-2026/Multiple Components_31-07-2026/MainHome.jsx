import React, { lazy } from "react";
import { Suspense } from "react";

let Home = lazy(() => import("./Home"));
let About = lazy(() => import("./About"));
let Contact = lazy(() => import("./Contact"));

function MainHome() {
    return (
        <div>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Home />
                <About />
                <Contact />
            </Suspense>
        </div>
    )
}

export default MainHome;