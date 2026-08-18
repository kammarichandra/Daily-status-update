import React, { useState } from 'react'

function Searchbar({onsearch}) {

    let [query , setquery] = useState("");

    let handlesearch = ()=>{
        onsearch(query);
    };

  return (
    <div className="search-bar">
        <input type="text" placeholder='search products...' value={query} onChange={(e)=>setquery(e.target.value)} />

        <button onClick={handlesearch}>search</button>
    </div>
  )
}

export default Searchbar