import React, { useState } from 'react'
import Input from './Input';
function EmpSearch() {
    let[search , setsearch] = useState("");

  return (
    <div>
      <Input label="Search Employee" name="search" placeholder="Enter employee name" value={search} onChange={(e) => setsearch(e.target.value)} />

      <p>You typed: {search}</p>
    </div>
  )
}

export default EmpSearch