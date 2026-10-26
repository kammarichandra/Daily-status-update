import React from 'react'
import "./Header.css";
function Header({title , username}) {

  return (
    <header className='header'>
        <h2>{title}</h2>

        <div className='user-info'>
            <span>Welcome, {username}</span>
        </div>
    </header>
  )
}

export default Header