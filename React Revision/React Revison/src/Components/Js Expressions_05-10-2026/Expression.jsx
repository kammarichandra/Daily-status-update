import React from 'react'

function Expression() {

    let name = "chandra";
    let age = 23;
    let a = 10;
    let b = 20;
    
  return (
    <div>
        <h1>Expression</h1>
        <h2>Hello {name}</h2>
        <p>age   : {age}</p>
        <p>Total : {a+b}</p>
        <p>Year  : {new Date().getFullYear()}</p>
    </div>
  )
}

export default Expression