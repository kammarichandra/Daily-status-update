import React from "react";

function SearchBar({ search, onSearch }) {

  console.log("SearchBar Rendered");

  return (

    <input type="text" placeholder="Search Student..." value={search} onChange={(e) => onSearch(e.target.value)}/>
    
  );
}

export default React.memo(SearchBar);