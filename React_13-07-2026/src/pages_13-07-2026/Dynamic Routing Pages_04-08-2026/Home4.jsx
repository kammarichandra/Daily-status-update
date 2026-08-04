import React from 'react'
import { Link } from 'react-router-dom';

function Home4() {
  return (
    <div>
        <h1> Home page </h1>
        <Link to="/students">View Students</Link>
    </div>
  )
}

export default Home4