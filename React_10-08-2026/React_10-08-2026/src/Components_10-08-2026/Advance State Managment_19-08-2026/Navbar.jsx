import React from 'react'
import { usetheme } from './ContextApi'

function Navbar() {

  let { theme, toggletheme } = usetheme();

  return (
   <nav>
      <h2>My App</h2>

      <p>Current Theme: {theme}</p>

      <button onClick={toggletheme}> Toggle Theme </button>
      
    </nav>
  )
}

export default Navbar