import React, { useEffect, useRef } from 'react'

function Searchbar({searchTerm, setSearchTerm}) {

    let SearchInput = useRef(null);

    useEffect(()=>{
        SearchInput.current?.focus()
    },[]);


  return (
    
    <div className="search-container">

      <input
        ref={SearchInput}
        type="text"
        placeholder=" Search employee..."
        value={searchTerm}
        onChange={(event) =>
          setSearchTerm(event.target.value)
        }
      />
    </div>

  )
}

export default Searchbar