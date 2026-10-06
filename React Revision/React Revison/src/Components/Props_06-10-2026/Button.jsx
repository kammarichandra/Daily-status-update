import React from 'react'

function Button({onclick}) {
  return (
    <div>
        <button onClick={onclick}>clickme</button>
    </div>
  )
}

export default Button