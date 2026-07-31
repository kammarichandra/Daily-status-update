import React ,{lazy,Suspense} from "react";

let Dashboard = lazy(()=>import("./Dashboard"))

function Suspense1() {
  return (
    <div>
        
      <h1>My Application</h1>

      <Suspense fallback={<p>Loading Dashboard...</p>}>
        <Dashboard />
      </Suspense>

    </div>
  )
}

export default Suspense1;