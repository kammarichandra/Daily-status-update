import React, { lazy, Suspense, useState } from 'react'
let Profile = lazy(()=>import("./Profile"));

function Lazyloading() {
    let[showprofile , setshowprofile] = useState(false);

  return (
    <div>
        <h1>lazy loading practice </h1>

        <button onClick={()=>setshowprofile(true)}>Show profile</button>

        {showprofile && (

            <Suspense fallback = {<h2>Loading profile...</h2>}>
                <Profile/>
            </Suspense>
        )}
    </div>
  )
}

export default Lazyloading