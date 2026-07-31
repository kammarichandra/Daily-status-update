import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

let Home    = lazy(() => import("./Home"));
let About   = lazy(() => import("./About"));
let Contact = lazy(() => import("./Contact"));


function ReactRouter() {
  return (
     <BrowserRouter>
      <Suspense fallback={<h2>Loading Page...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default ReactRouter