import React, { useEffect, useRef } from 'react'

function Searchbar({ searchTerm, setSearchTerm }) {
    
    let searchInputRef = useRef(null);

    useEffect(()=>{
        searchInputRef.current?.focus();
    },[]);
    
  return (
    
    <div className="search-container">

      <input ref={searchInputRef} type="text" placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

      <button><i class="fa-brands fa-sistrix"></i> Search</button>

    </div>

  )
}

export default Searchbar