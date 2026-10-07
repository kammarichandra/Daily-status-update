import React, { useEffect, useState } from 'react'

function Search() {

    let [search , setsearch] = useState("");

    useEffect(()=>{
        console.log("searching for : " , search)
    },[search]);

  return (
    <div>
        <h2>search</h2>
        <input type="text" value={search} placeholder='search the employee' 
        onChange={(e)=> setsearch(e.target.value)}
        />
        <p>search : {search}</p>
    </div>
  )
}

export default Search