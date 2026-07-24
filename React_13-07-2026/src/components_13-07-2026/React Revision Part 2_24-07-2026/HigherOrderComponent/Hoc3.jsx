import React from 'react'
import Hoc from './Hoc'
import Hoc1 from './Hoc1'

let EnhacedUser = Hoc(Hoc1);


function Hoc3() {
  return (
    <div>
        <EnhacedUser/>
    </div>
  )
}

export default Hoc3;