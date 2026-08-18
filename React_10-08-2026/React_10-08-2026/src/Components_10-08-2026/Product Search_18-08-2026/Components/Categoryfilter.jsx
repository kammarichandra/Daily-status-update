import React, { useState, useEffect } from 'react'

function Categoryfilter({oncategorychange}) {
  let [categories, setcategories] = useState([]);

  useEffect(() => {
    // Fetch categories from API
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => setcategories(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h3>Filter by Category</h3>
      <select onChange={(e) => oncategorychange(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category) => (
            
          <option key={category} value={category}> {category} </option>

        ))}
      </select>
    </div>
  )
}

export default Categoryfilter