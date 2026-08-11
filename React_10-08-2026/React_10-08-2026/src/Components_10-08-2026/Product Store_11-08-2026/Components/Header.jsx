import React from 'react'

function Header({cartcount}) {
  return (
    <header className="header">
      <h1><i class="fa-solid fa-store"></i> My Store</h1>

      <div className="cart-count">
        <i class="fa-solid fa-cart-shopping"></i> Cart 
      </div>
    </header>
  )
}

export default Header