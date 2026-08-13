import React, { lazy, Suspense, useState } from 'react'

let Home = lazy(()=>import("./Home"));
let About = lazy(()=>import("./About"));

function LazyLoading() {

  const [page, setPage] = useState("home");

  return (
    <div>
      <h1>React Practice</h1>

      <button onClick={() => setPage("home")}>
        Home
      </button>

      <button onClick={() => setPage("about")}>
        About
      </button>

      <Suspense fallback={<p>Loading...</p>}>
        {page === "home" && <Home />}
        {page === "about" && <About />}
      </Suspense>
    </div>
  )
}

export default LazyLoading