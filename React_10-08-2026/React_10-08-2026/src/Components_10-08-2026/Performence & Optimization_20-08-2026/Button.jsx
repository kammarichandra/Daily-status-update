import React from 'react'

function Button({handleclick}) {

    console.log("button component rendered..")

  return (
    <div>

        <button onClick={handleclick}> Click Me </button>
        
    </div>
  )
}

export default React.memo(Button)