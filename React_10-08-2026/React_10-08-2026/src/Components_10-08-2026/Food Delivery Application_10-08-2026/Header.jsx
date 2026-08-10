import React from 'react'

function Header({ CartCount }) {

    return (
        <header className="header">

            <h1> QuickBite</h1>

           <div className="cart-icon"> 
            <i className="fa-solid fa-cart-shopping"></i> 
           <span> Cart: {CartCount}</span> 
           </div>

        </header>
    )
}

export default Header